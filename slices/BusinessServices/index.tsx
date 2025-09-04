import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  FileText,
  CreditCard,
  RefreshCcw,
  PieChart,
  CalendarClock,
} from "lucide-react";

/**
 * Props for `BusinessServices`.
 */
export type BusinessServicesProps =
  SliceComponentProps<Content.BusinessServicesSlice>;

/**
 * Component for "BusinessServices" Slices.
 */
const BusinessServices: FC<BusinessServicesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column - Request Quote */}
          <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-10 h-fit">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Request Your Free Quote
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Tell us what you need, and we’ll send you a clear, customized
              quote — fast, simple, and with no strings attached. Plus, your
              first consultation is absolutely free, so you can explore how
              Helping CPAs can support your firm with zero risk.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Your firm is unique — and so are your needs. That’s why we don’t
              believe in one-size-fits-all pricing. Request a free, personalized
              quote today and see exactly how Helping CPAs can add value to your
              practice. With transparent pricing and no hidden costs, you’ll
              know upfront what works best for your firm. Plus, your first
              consultation is free.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What we offer :
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Your own dedicated assistant
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Year end accounts and tax returns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular reviews of your bookkeeping and accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    24/7 access to your online portal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">No hassle switching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Our Services */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Services
            </h2>

            <p className="text-slate-200 mb-12 leading-relaxed">
              In dapibus quis arci in eleifend. Suspendisse porttitor nunc
              justo, sed accumsan risus facilisis sit amet. Suspendisse ut eros
              nisl. Ut accumsan nec tellus vel pulvinar. Sed vel facilisis odio.
              Vivamus ac posuere arcu.
            </p>

            <div className="space-y-8">
              {/* Service 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Accounting & Bookkeeping
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Complete day-to-day bookkeeping using platforms like
                    QuickBooks, Xero, and Sage.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Tax Compliance & Payroll
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Accurate calculation of salaries, deductions, and tax
                    withholdings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Bank & Account Reconciliations
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Monthly reconciliation of bank statements, credit cards, and
                    vendor accounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <RefreshCcw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Quickbooks & Software Conversions
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Migration from legacy systems to QuickBooks or other modern
                    accounting software.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Financial Reporting
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Preparation of accurate financial statements, balance
                    sheets, and P&L reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <CalendarClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Tax Season Support
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Additional workforce support during peak tax seasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
