"use client";

import React, { useState } from "react";
import JobDeskTabs from "@/components/jobdesk/JobDeskTabs";
import { mockUser, mockAllowances } from "./data";
import { AllowanceRow } from "./data";

function formatCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function JobDeskPage() {
  const [showWarning, setShowWarning] = useState(true);
  const [allowances] = useState<AllowanceRow[]>(mockAllowances);

  return (
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: User Info */}
          <aside className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow p-5">
              <h3 className="text-lg font-semibold">{mockUser.name}</h3>
              <p className="text-sm text-slate-500">{mockUser.department}</p>

              <div className="mt-4 space-y-2">
                <div>
                  <div className="text-xs text-slate-400">Salary</div>
                  <div className="font-medium">{formatCurrency(mockUser.salary)}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Work Shift</div>
                  <div className="font-medium">{mockUser.workShift}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Joining Date</div>
                  <div className="font-medium">{mockUser.joiningDate}</div>
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <h4 className="text-sm font-semibold">Contact</h4>
                <div className="mt-2 text-sm text-slate-600 space-y-1">
                  <div>
                    <span className="text-xs text-slate-400 mr-2">Email</span>
                    <a href={`mailto:${mockUser.contact.email}`} className="underline">
                      {mockUser.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 mr-2">Phone</span>
                    <a href={`tel:${mockUser.contact.phone}`} className="underline">
                      {mockUser.contact.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 mr-2">Website</span>
                    <a href={mockUser.contact.website} target="_blank" rel="noreferrer" className="underline">
                      {mockUser.contact.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Tabs + Allowance content */}
          <section className="lg:col-span-2 space-y-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow p-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Job Desk — Allowance</h2>
                  <div className="text-sm text-slate-500">Overview</div>
                </div>

                {/* Tabs (scrollable) */}
                <div>
                  <JobDeskTabs active="Allowance" basePath="/jobdesk" />
                </div>

                {/* Warning alert (dismissible) */}
                {showWarning && (
                  <div className="flex items-start justify-between gap-4 p-3 rounded-md border border-amber-200 bg-amber-50">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-amber-700">⚠️</div>
                      <div className="text-sm text-amber-800">
                        This allowance information is subject to HR review. Please confirm allowance allocations before
                        finalizing payroll.
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => setShowWarning(false)}
                        aria-label="Close warning"
                        className="text-amber-700 hover:text-amber-900 text-sm font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Allowance Table Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="text-left text-sm text-slate-600">
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Paid</th>
                      <th className="px-4 py-3">Allowance</th>
                      <th className="px-4 py-3">Earned</th>
                      <th className="px-4 py-3">Taken</th>
                      <th className="px-4 py-3">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {allowances.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-700">{row.type}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              row.paid === "Paid" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {row.paid}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm text-slate-600">{row.allowanceHours}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium">{formatCurrency(row.earned)}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">{row.taken}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">{row.availability}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Example: quick actions area */}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-slate-500">Showing {allowances.length} allowance types</div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded-md text-sm bg-slate-100 hover:bg-slate-200">
                    Export
                  </button>
                  <button className="px-3 py-1 rounded-md text-sm bg-amber-600 text-white hover:bg-amber-700">
                    Add Allowance
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
