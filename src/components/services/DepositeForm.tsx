"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { apiClient } from "@/service/apiClient";

const DepositForm: React.FC = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      iban: "",
      amount: 0,
    },
    validationSchema: Yup.object({
      iban: Yup.string().required("Account number is required").min(9).max(30),

      amount: Yup.number()
        .min(1)
        .typeError("Deposit amount must be a number")
        .required("Deposit amount is required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const payload = {
          iban: values.iban,
          amount: Number(values.amount.toFixed(3)),
        };
        const response = await apiClient("post", "/deposit", payload);
        console.log("response--->", response);
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
    <form
      onSubmit={formik.handleSubmit}
      className="mt-10 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Deposit Form</h2>

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
        {formik.touched.iban && formik.errors.iban && (
          <p className="text-red-500 text-sm">{formik.errors.iban}</p>
        )}
      </label>

      <label className="block mb-2">
        Deposit Amount:
        <input
          type="number"
          name="amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-2 border rounded"
        />
        {formik.touched.amount && formik.errors.amount && (
          <p className="text-red-500 text-sm">{formik.errors.amount}</p>
        )}
      </label>

      <button
        type="submit"
        className="w-full p-2 mt-4 bg-[#872a41] text-white rounded hover:bg-[#872a41dc]"
      >
        Submit
      </button>
    </form>
  );
};

export default DepositForm;
