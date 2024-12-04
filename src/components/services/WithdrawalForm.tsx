"use client";
import { apiClient } from "@/service/apiClient";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const WithdrawalForm: React.FC = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    iban: Yup.string()
      .required("Account number is required")
      .min(9, "Account number is too short")
      .max(30, "Account number is too long"),
    amount: Yup.number()
      .min(1)
      .required("Withdrawal amount is required")
      .positive("Amount must be positive"),
  });

  const formik = useFormik({
    initialValues: {
      iban: "",
      amount: 0,
    },
    validationSchema,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const payload = {
          iban: values.iban,
          amount: Number(values.amount.toFixed(3)),
        };
        await apiClient("post", "/withdraw", payload);
        resetForm();
        router.push("/");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          toast.error(error.response.data.error);
        } 
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex justify-center mt-12">
      <form
        onSubmit={formik.handleSubmit}
        className=" max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Withdrawal Form</h2>
        <label className="block mb-2">
          Account Number:
          <input
            type="text"
            name="iban"
            value={formik.values.iban}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border rounded"
          />
          {formik.touched.iban && formik.errors.iban ? (
            <p className="text-red-500">{formik.errors.iban}</p>
          ) : null}
        </label>
        <label className="block mb-2">
          Withdrawal Amount:
          <input
            type="number"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border rounded"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <p className="text-red-500">{formik.errors.amount}</p>
          ) : null}
        </label>
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-[#872a41] text-white rounded hover:bg-[#872a41dc]"
          disabled={formik.isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WithdrawalForm;
