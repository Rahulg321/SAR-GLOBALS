import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { BarChart3, Building2, Download, FileText } from "lucide-react";

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
              In dapibus quis arci in eleifend. Suspendisse porttitor nunc
              justo, sed accumsan risus facilisis sit amet. Suspendisse ut eros
              nisl. Ut accumsan nec tellus vel pulvinar. Sed vel facilisis odio.
              Vivamus ac posuere arcu.
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

            <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 text-base font-medium">
              <Download className="w-5 h-5 mr-2" />
              DOWNLOAD OUR BROCHURE
            </Button>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Business Performance Monitor
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
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
