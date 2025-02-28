"use client"

import { ExternalLink } from "lucide-react"
import { useEffect } from "react"

export default function BOR() {
  useEffect(() => {
    function switchTab(tabId) {
      // Hide all content sections
      document.querySelectorAll('[id^="content-"]').forEach((section) => {
        section.classList.add("hidden")
      })

      // Show the selected content section
      document.getElementById("content-" + tabId).classList.remove("hidden")

      // Reset all tab buttons
      document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
        tab.classList.remove("border-blue-600", "bg-blue-50", "text-blue-800")
        tab.classList.add("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
      })

      // Highlight the active tab button
      const activeTab = document.getElementById("tab-" + tabId)
      activeTab.classList.remove("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
      activeTab.classList.add("border-b-2", "border-blue-600", "bg-blue-50", "text-blue-800")
    }

    // Initialize the first tab as active
    switchTab("summary")
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-8 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">BOR - Lotkov - Carrie Holle Group</h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-4">Business Services Operations Research</h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <p className="text-lg">Alex Lotkov</p>
            <p className="text-lg">December 9, 2024</p>
          </div>
        </div>
      </div>

      {/* H.O.M.E. Acronym Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { letter: "H", word: "Handle More Leads" },
            { letter: "O", word: "Optimize Paperwork" },
            { letter: "M", word: "Manage Social Media Presence" },
            { letter: "E", word: "Effectively Manage Email" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6 text-center">
                <div className="text-6xl md:text-7xl font-bold text-blue-800 mb-3">{item.letter}</div>
                <div className="text-lg font-medium text-blue-600">{item.word}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-8 mb-16">
        {/* Custom Tabs using only Tailwind */}
        <div className="w-full">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-blue-200 mb-8">
            <button
              id="tab-summary"
              onClick={() => {
                function switchTab(tabId) {
                  // Hide all content sections
                  document.querySelectorAll('[id^="content-"]').forEach((section) => {
                    section.classList.add("hidden")
                  })

                  // Show the selected content section
                  document.getElementById("content-" + tabId).classList.remove("hidden")

                  // Reset all tab buttons
                  document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
                    tab.classList.remove("border-blue-600", "bg-blue-50", "text-blue-800")
                    tab.classList.add("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  })

                  // Highlight the active tab button
                  const activeTab = document.getElementById("tab-" + tabId)
                  activeTab.classList.remove("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  activeTab.classList.add("border-b-2", "border-blue-600", "bg-blue-50", "text-blue-800")
                }
                switchTab("summary")
              }}
              className="px-4 py-2 text-blue-800 font-medium border-b-2 border-blue-600 bg-blue-50 rounded-t-lg"
            >
              Overview
            </button>
            <button
              id="tab-plan"
              onClick={() => {
                function switchTab(tabId) {
                  // Hide all content sections
                  document.querySelectorAll('[id^="content-"]').forEach((section) => {
                    section.classList.add("hidden")
                  })

                  // Show the selected content section
                  document.getElementById("content-" + tabId).classList.remove("hidden")

                  // Reset all tab buttons
                  document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
                    tab.classList.remove("border-blue-600", "bg-blue-50", "text-blue-800")
                    tab.classList.add("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  })

                  // Highlight the active tab button
                  const activeTab = document.getElementById("tab-" + tabId)
                  activeTab.classList.remove("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  activeTab.classList.add("border-b-2", "border-blue-600", "bg-blue-50", "text-blue-800")
                }
                switchTab("plan")
              }}
              className="px-4 py-2 text-blue-600 font-medium hover:text-blue-800 hover:bg-blue-50 rounded-t-lg"
            >
              Strategic Plan
            </button>
            <button
              id="tab-implementation"
              onClick={() => {
                function switchTab(tabId) {
                  // Hide all content sections
                  document.querySelectorAll('[id^="content-"]').forEach((section) => {
                    section.classList.add("hidden")
                  })

                  // Show the selected content section
                  document.getElementById("content-" + tabId).classList.remove("hidden")

                  // Reset all tab buttons
                  document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
                    tab.classList.remove("border-blue-600", "bg-blue-50", "text-blue-800")
                    tab.classList.add("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  })

                  // Highlight the active tab button
                  const activeTab = document.getElementById("tab-" + tabId)
                  activeTab.classList.remove("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  activeTab.classList.add("border-b-2", "border-blue-600", "bg-blue-50", "text-blue-800")
                }
                switchTab("implementation")
              }}
              className="px-4 py-2 text-blue-600 font-medium hover:text-blue-800 hover:bg-blue-50 rounded-t-lg"
            >
              Implementation
            </button>
            <button
              id="tab-results"
              onClick={() => {
                function switchTab(tabId) {
                  // Hide all content sections
                  document.querySelectorAll('[id^="content-"]').forEach((section) => {
                    section.classList.add("hidden")
                  })

                  // Show the selected content section
                  document.getElementById("content-" + tabId).classList.remove("hidden")

                  // Reset all tab buttons
                  document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
                    tab.classList.remove("border-blue-600", "bg-blue-50", "text-blue-800")
                    tab.classList.add("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  })

                  // Highlight the active tab button
                  const activeTab = document.getElementById("tab-" + tabId)
                  activeTab.classList.remove("text-blue-600", "hover:text-blue-800", "hover:bg-blue-50")
                  activeTab.classList.add("border-b-2", "border-blue-600", "bg-blue-50", "text-blue-800")
                }
                switchTab("results")
              }}
              className="px-4 py-2 text-blue-600 font-medium hover:text-blue-800 hover:bg-blue-50 rounded-t-lg"
            >
              ROI & Insights
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Summary Tab */}
            <div id="content-summary" className="space-y-8">
              {/* Executive Summary */}
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Executive Summary</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    This research focuses on enhancing operational efficiency at Carrie Holle Group (CHG), a real estate
                    organization serving cities around Indianapolis, through the strategic integration of artificial
                    intelligence. The study evaluates current AI applications, identifies challenges—such as paperwork,
                    time management, and communication—and proposes a comprehensive plan to boost productivity and
                    customer engagement.
                  </p>
                </div>
              </div>

              {/* Business Description */}
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Description of Business & Target Market</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    CHG specializes in connecting buyers and sellers of luxury homes (priced over $750,000) in areas
                    such as Carmel, Noblesville, Westfield, Fishers, and Zionsville. The primary target market includes
                    wealthier individuals aged between 40 and 70 who are looking for high-quality properties and
                    personalized service.
                  </p>
                </div>
              </div>

              {/* Research Methods */}
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Research Methods & Findings</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    A combination of primary and secondary research was conducted:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                    <li>
                      <span className="font-semibold">Primary Research:</span> In-depth interviews with the CHG owner to
                      assess operational challenges and current AI usage.
                    </li>
                    <li>
                      <span className="font-semibold">Secondary Research:</span> Analysis of industry blogs, surveys,
                      and market reports on AI applications in real estate.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Findings revealed challenges in managing paperwork, time management issues, and customer
                    communication inefficiencies, while also highlighting opportunities for AI-driven improvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Plan Tab */}
            <div id="content-plan" className="hidden space-y-8">
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Proposed Strategic Plan</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The strategic plan is organized under the H.O.M.E. framework:
                  </p>
                  <ul className="space-y-6">
                    {/* Strategic Items */}
                    <li className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-800 mb-2">Handle More Leads (Email Management)</h4>
                      <p className="text-gray-700">
                        Integrate SaneBox (annual cost: $99) and Warmly.ai (annual cost: $8,400) to automatically sort
                        emails and proactively engage potential clients.
                      </p>
                    </li>
                    <li className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-800 mb-2">Optimize Paperwork</h4>
                      <p className="text-gray-700">
                        Deploy Genie.ai (annual cost: ~$100) for automated contract generation and document processing,
                        reducing manual effort and errors.
                      </p>
                    </li>
                    <li className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-800 mb-2">Manage Social Media Presence</h4>
                      <p className="text-gray-700">
                        Utilize Buffer.com (annual cost: $60), Jasper.ai (approx. $708 per user), and ChatGPT Team
                        (approx. $450 per user) to automate content creation and scheduling, enhancing digital outreach.
                      </p>
                    </li>
                    <li className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-800 mb-2">Effectively Manage Email</h4>
                      <p className="text-gray-700">
                        Integrate ChatGPT as a personal AI assistant to support daily tasks such as brainstorming,
                        responding to inquiries, and streamlining communication.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Tab */}
            <div id="content-implementation" className="hidden space-y-8">
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Implementation Timeline</h3>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    {/* Timeline Items */}
                    <div className="flex">
                      <div className="mr-4">
                        <div className="h-full w-0.5 bg-blue-300 relative flex items-center justify-center">
                          <div className="absolute w-4 h-4 rounded-full bg-blue-600 z-10"></div>
                        </div>
                      </div>
                      <div className="pb-8">
                        <h4 className="font-bold text-blue-800 mb-1">Phase 01 - Setup</h4>
                        <p className="text-gray-700">Integrate the necessary tools and configure systems (Month 1).</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <div className="h-full w-0.5 bg-blue-300 relative flex items-center justify-center">
                          <div className="absolute w-4 h-4 rounded-full bg-blue-600 z-10"></div>
                        </div>
                      </div>
                      <div className="pb-8">
                        <h4 className="font-bold text-blue-800 mb-1">Phase 02 - Training</h4>
                        <p className="text-gray-700">
                          Train staff on using the new AI tools and establish workflows (Month 2).
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <div className="h-full w-0.5 bg-blue-300 relative flex items-center justify-center">
                          <div className="absolute w-4 h-4 rounded-full bg-blue-600 z-10"></div>
                        </div>
                      </div>
                      <div className="pb-8">
                        <h4 className="font-bold text-blue-800 mb-1">Phase 03 - Deployment</h4>
                        <p className="text-gray-700">
                          Fully deploy the tools across email management, paperwork automation, and social media
                          operations (Month 3).
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <div className="h-full w-0.5 bg-blue-300 relative flex items-center justify-center">
                          <div className="absolute w-4 h-4 rounded-full bg-blue-600 z-10"></div>
                        </div>
                      </div>
                      <div className="pb-8">
                        <h4 className="font-bold text-blue-800 mb-1">Phase 04 - Evaluation & Optimization</h4>
                        <p className="text-gray-700">
                          Monitor key metrics (e.g., email response times, customer engagement, time saved) and refine
                          processes (From Month 4 onwards).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Tab */}
            <div id="content-results" className="hidden space-y-8">
              {/* Budget & ROI Analysis */}
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Budget & ROI Analysis</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-semibold mb-4 text-gray-700">Tool Investments and Projected Returns:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                    <li>
                      <span className="font-semibold">Email Management:</span> SaneBox and Warmly.ai yield estimated
                      values of $29,200 and $39,600 respectively.
                    </li>
                    <li>
                      <span className="font-semibold">Paperwork Automation:</span> Genie.ai helps reduce manual
                      processing time, enhancing overall efficiency.
                    </li>
                    <li>
                      <span className="font-semibold">Enhanced Social Media Presence:</span> Buffer.com, Jasper.ai, and
                      ChatGPT Team contribute to an additional value of up to $110,681.
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Overall, the total annual tool costs are approximately $9,818. The strategic plan is projected to
                    save 1,050 hours annually—valued at around $21,000 in time savings—and generate an estimated
                    additional $99,499 in sales, leading to a gross profit increase of $110,681 and an ROI of 1027.6%.
                  </p>
                </div>
              </div>

              {/* Key Insights */}
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Key Insights</h3>
                </div>
                <div className="p-6 bg-white">
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Highest Value Tools:</span> Warmly.ai, ChatGPT, and Jasper.ai
                      drive significant improvements in both sales and operational efficiency.
                    </li>
                    <li>
                      <span className="font-semibold">Time Efficiency:</span> The plan saves approximately 1,050 hours
                      per year—equivalent to nearly 98 full workdays.
                    </li>
                    <li>
                      <span className="font-semibold">Investment Strategy:</span> Even lower-cost tools like SaneBox and
                      Genie.ai provide disproportionate value, reinforcing a smart investment in AI.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bibliography */}
              <div className="border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Bibliography</h3>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    {[
                      {
                        name: "Deal Machine: AI in Real Estate",
                        url: "https://www.dealmachine.com/blog/ai-real-estate",
                      },
                      { name: "Warmly.ai", url: "https://warmly.ai" },
                      { name: "SaneBox", url: "https://www.sanebox.com" },
                      {
                        name: "Builtin: AI in Real Estate",
                        url: "https://builtin.com/artificial-intelligence/ai-real-estate",
                      },
                      {
                        name: "Top Real Estate Virtual Tour Companies",
                        url: "https://propertyspark.com/top-11-most-innovative-real-estate-virtual-tour-companies/",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <ExternalLink className="h-4 w-4 text-blue-600 mr-2" />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}