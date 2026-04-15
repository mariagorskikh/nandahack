"use client";

import { useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Submit() {
  const [formData, setFormData] = useState({
    teamName: "",
    projectName: "",
    repoUrl: "",
    videoUrl: "",
    track: "",
    description: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="submit"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <SectionHeading
        title="Submit Your Project"
        subtitle="Upload your code, video demo, and slides"
      />

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {submitted ? (
          <div className="text-center py-16 px-8 bg-white/[0.02] border border-amber-500/20 rounded-lg">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-white mb-2">Submission Received!</h4>
            <p className="text-white/60">We&apos;ll review your project and get back to you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team & Project Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Team Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.12] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-500/40 transition-colors text-sm"
                  placeholder="Your team name"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Project Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.12] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-500/40 transition-colors text-sm"
                  placeholder="Your project name"
                />
              </div>
            </div>

            {/* Code Repo URL */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Code Repository URL <span className="text-amber-500">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.repoUrl}
                onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.12] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-500/40 transition-colors text-sm"
                placeholder="https://github.com/your-team/your-project"
              />
            </div>

            {/* Video Demo URL */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Video Demo URL <span className="text-amber-500">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.12] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-500/40 transition-colors text-sm"
                placeholder="https://youtube.com/watch?v=..."
              />
            </div>

            {/* Slides Upload */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Slides Upload
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.pptx,.ppt"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center px-4 py-3 bg-white/[0.04] border border-white/[0.12] border-dashed rounded-lg text-sm cursor-pointer hover:border-amber-500/30 transition-colors">
                  <svg className="w-5 h-5 text-white/30 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <span className={fileName ? "text-white/80" : "text-white/30"}>
                    {fileName || "Upload .pdf or .pptx"}
                  </span>
                </div>
              </div>
            </div>

            {/* Track Selection */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Track <span className="text-amber-500">*</span>
              </label>
              <select
                required
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.12] rounded-lg text-white focus:outline-none focus:border-amber-500/40 transition-colors text-sm appearance-none cursor-pointer"
              >
                <option value="" className="bg-black text-white/50">Select a track</option>
                <option value="openclaw" className="bg-black">OpenClaw</option>
                <option value="join39" className="bg-black">Join39</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Brief Description <span className="text-amber-500">*</span>
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.12] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-500/40 transition-colors resize-none text-sm"
                rows={4}
                placeholder="Describe what you built, which problem area it addresses, and how it works..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-amber-500 text-black rounded-lg text-base font-semibold hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/20"
            >
              Submit Project
            </button>

            <p className="text-center text-white/30 text-xs mt-4">
              Submissions managed via BeMyApp.{" "}
              <a href="#" className="text-amber-500/60 hover:text-amber-500/80 underline">
                Learn more
              </a>
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
