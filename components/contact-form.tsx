"use client";

import type React from "react";

import { useState } from "react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { submitContactForm } from "@/app/actions";

type FormState = {
  success: boolean;
  message: string;
  errors: Record<string, string>;
};

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card className="shadow-lg border-0 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Send Us a Message
        </CardTitle>
        <CardDescription className="text-gray-600">
          Fill out the form below and we&apos;ll get back to you within 24
          hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.success && (
          <Alert className="mb-6 border-emerald-200 bg-emerald-50">
            <AlertDescription className="text-emerald-800">
              ✅ Thank you for your message! We&apos;ll get back to you within
              24 hours.
            </AlertDescription>
          </Alert>
        )}

        {state.message && !state.success && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">
              ❌ {state.message}
            </AlertDescription>
          </Alert>
        )}

        <form action={formAction} className="space-y-6">
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`transition-colors ${
                  state.errors?.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-emerald-500"
                }`}
                required
              />
              {state.errors?.name && (
                <p className="text-sm text-red-600">{state.errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                className={`transition-colors ${
                  state.errors?.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-emerald-500"
                }`}
                required
              />
              {state.errors?.phone && (
                <p className="text-sm text-red-600">{state.errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className={`transition-colors ${
                state.errors?.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-emerald-500"
              }`}
              required
            />
            {state.errors?.email && (
              <p className="text-sm text-red-600">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your accounting needs, questions, or how we can help your business..."
              className={`min-h-[120px] transition-colors resize-none ${
                state.errors?.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-emerald-500"
              }`}
              required
            />
            {state.errors?.message && (
              <p className="text-sm text-red-600">{state.errors.message}</p>
            )}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={pending}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms
            of service. We respect your privacy and will never share your
            information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
