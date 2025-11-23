import {  Header } from "@/components/navbar/header";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MetricCards } from "@/components/section1/metric_chart";
import Image from "next/image";
import { EarningReports } from "@/components/section2/earning_report_chart";
import { ChartRadarLegend } from "@/components/section2/sales_two_chart";
import { BrowserStates } from "@/components/section3/browser-states";
import { ProjectStatus } from "@/components/section3/project-status";
import { ActiveProjects } from "@/components/section3/active-projects";
import { LastTransaction } from "@/components/section4/last_transaction";
import { ActivityTimeline } from "@/components/section4/activity_timeline";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
     <>
      <div className="ml-2 mr-2">
        {/* sidebartrigger section */}
        <SidebarTrigger/>
        {/* navbar section */}
          <div >
            <Header/>
          </div>
          {/* section-2 */}
          <div className="mt-2">
            <MetricCards/>
          </div>
          {/* section-3 */}
          <div className="grid xl:grid-cols-12 md:grid-cols-2 gap-4  mt-2">
            <div className="xl:col-span-8 md:col-span-2">
              <EarningReports/>
            </div>
            <div className="xl:col-span-4 md:col-span-2 ">
              <ChartRadarLegend/>
            </div>
          </div>
          {/* section-4 */}
          <div className="grid xl:grid-cols-12 gap-4 md:grid-cols-6 mt-2">
            <div className="xl:col-span-4 md:col-span-3">
              <BrowserStates/>
            </div>
            <div className="xl:col-span-4 md:col-span-3">
              <ProjectStatus/>
            </div>
            <div className="xl:col-span-4 md:col-span-6">
              <ActiveProjects/>
            </div>
          </div>
          {/* section-5 */}
          <div className="grid xl:grid-cols-12 md:grid-cols-2 gap-4 mt-2">
            <div className="xl:col-span-6 md:col-span-2">
                <LastTransaction/>
            </div>
            <div className="xl:col-span-6 md:col-span-2">
                <ActivityTimeline/>
            </div>
          </div>
          {/* footer-Section */}
          <div>
            <Footer/>
          </div>
      </div> 
     </>
  );
}
