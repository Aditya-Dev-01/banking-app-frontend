"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { apiClient } from "@/service/apiClient";

const TransferForm: React.FC = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fromIban: "",
      toIban: "",
      amount: 0,
    },
    validationSchema: Yup.object({
      fromIban: Yup.string()
        .required("Account number is required")
        .min(9)
        .max(30),
      toIban: Yup.string()
        .required("Account number is required")
        .min(9)
        .max(30),
      amount: Yup.number()
        .min(1)
        .typeError("Transfer amount must be a number")
        .required("Transfer amount is required"),
    }),

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const payload = {
          fromIban: values.fromIban,
          toIban: values.toIban,
          amount: Number(values.amount.toFixed(3)),
        };
        if (payload.fromIban !== payload.toIban) {
          await apiClient("post", "/transfer", payload);
          resetForm();
          router.push("/");
        } else {
          toast.error("account number must be different");
          setSubmitting(false);
        }
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
        From Account Number:
        <input
          type="text"
          name="fromIban"
          value={formik.values.fromIban}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-2 border rounded"
        />
        {formik.touched.fromIban && formik.errors.fromIban && (
          <p className="text-red-500 text-sm">{formik.errors.fromIban}</p>
        )}
      </label>
      <label className="block mb-2">
        To Account Number:
        <input
          type="text"
          name="toIban"
          value={formik.values.toIban}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-2 border rounded"
        />
        {formik.touched.toIban && formik.errors.toIban && (
          <p className="text-red-500 text-sm">{formik.errors.toIban}</p>
        )}
      </label>

      <label className="block mb-2">
        Amount:
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

export default TransferForm;
