"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";

export default function ConnectSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        areaOfInterest: "",
        comments: "",
    });

    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Required";
        if (!formData.lastName.trim()) newErrors.lastName = "Required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (!formData.areaOfInterest) newErrors.areaOfInterest = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setFormStatus("submitting");

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setFormStatus("success");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            areaOfInterest: "",
            comments: "",
        });

        setTimeout(() => setFormStatus("idle"), 5000);
    };

    // Robust Flexbox Input Container
    const inputWrapperClass = (fieldName: string, hasError: boolean) => `
        flex items-center w-full rounded-xl border transition-all duration-300 overflow-hidden
        ${focusedField === fieldName
            ? "border-[#39ff14]/50 bg-white/[0.07] shadow-[0_0_20px_rgba(57,255,20,0.1)]"
            : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
        }
        ${hasError ? "border-red-500/50 bg-red-500/5" : ""}
    `;

    const iconWrapperClass = (fieldName: string) => `
        flex items-center justify-center w-12 h-full pl-2 transition-colors duration-300
        ${focusedField === fieldName ? "text-[#39ff14]" : "text-slate-500"}
    `;

    return (
        <section id="connect" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />

            <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
                <div className="mb-16 max-w-4xl w-full text-center flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Start Your <span className="text-gradient-accent">Transformation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto text-center"
                    >
                        Direct line to our solution architects and AI engineers.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-3xl"
                >
                    {/* Dark Card */}
                    <div className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative">
                        {/* Glow effect behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#39ff14]/20 to-cyan-500/20 rounded-3xl blur opacity-20 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 ml-1 tracking-wider">FIRST NAME</label>
                                    <div className={inputWrapperClass('firstName', !!errors.firstName)}>
                                        <div className={iconWrapperClass('firstName')}>
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            onFocus={() => setFocusedField('firstName')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-slate-600 outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    {errors.firstName && <span className="text-red-400 text-xs ml-1">{errors.firstName}</span>}
                                </div>

                                {/* Last Name */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 ml-1 tracking-wider">LAST NAME</label>
                                    <div className={inputWrapperClass('lastName', !!errors.lastName)}>
                                        <div className={iconWrapperClass('lastName')}>
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            onFocus={() => setFocusedField('lastName')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-slate-600 outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                    {errors.lastName && <span className="text-red-400 text-xs ml-1">{errors.lastName}</span>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 ml-1 tracking-wider">WORK EMAIL</label>
                                    <div className={inputWrapperClass('email', !!errors.email)}>
                                        <div className={iconWrapperClass('email')}>
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-slate-600 outline-none"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    {errors.email && <span className="text-red-400 text-xs ml-1">{errors.email}</span>}
                                </div>

                                {/* Contact Number */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 ml-1 tracking-wider">PHONE <span className="text-slate-600 font-normal ml-1 normal-case tracking-normal">(Optional)</span></label>
                                    <div className={inputWrapperClass('contactNumber', false)}>
                                        <div className={iconWrapperClass('contactNumber')}>
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="tel"
                                            value={formData.contactNumber}
                                            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                            onFocus={() => setFocusedField('contactNumber')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-slate-600 outline-none"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Area of Interest */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 ml-1 tracking-wider">TOPIC OF INTEREST</label>
                                <div className={`${inputWrapperClass('areaOfInterest', !!errors.areaOfInterest)} relative`}>
                                    <div className={iconWrapperClass('areaOfInterest')}>
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <select
                                        value={formData.areaOfInterest}
                                        onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                                        onFocus={() => setFocusedField('areaOfInterest')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full py-4 pr-10 bg-transparent outline-none appearance-none cursor-pointer ${formData.areaOfInterest === "" ? "text-slate-600" : "text-white"
                                            }`}
                                    >
                                        <option value="" disabled className="text-slate-600 bg-[#0a0a0a]">Select a topic...</option>
                                        <option value="Custom AI Agents" className="bg-[#0a0a0a]">Custom AI Agents</option>
                                        <option value="RAG Systems" className="bg-[#0a0a0a]">RAG Systems</option>
                                        <option value="LLM Fine-Tuning" className="bg-[#0a0a0a]">LLM Fine-Tuning</option>
                                        <option value="Enterprise Infrastructure" className="bg-[#0a0a0a]">Enterprise Infrastructure</option>
                                        <option value="Consulting" className="bg-[#0a0a0a]">General Consulting</option>
                                        <option value="Other" className="bg-[#0a0a0a]">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                                </div>
                                {errors.areaOfInterest && <span className="text-red-400 text-xs ml-1">{errors.areaOfInterest}</span>}
                            </div>

                            {/* Comments */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 ml-1 tracking-wider">ADDITIONAL DETAILS <span className="text-slate-600 font-normal ml-1 normal-case tracking-normal">(Optional)</span></label>
                                <div className={`${inputWrapperClass('comments', false)} items-start`}>
                                    <div className={`${iconWrapperClass('comments')} pt-4 h-auto`}>
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <textarea
                                        value={formData.comments}
                                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                        onFocus={() => setFocusedField('comments')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-slate-600 outline-none min-h-[120px] resize-none leading-relaxed"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formStatus === "submitting" || formStatus === "success"}
                                className={`w-full py-4 mt-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${formStatus === "success"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20 cursor-default"
                                    : "bg-white text-black hover:bg-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:-translate-y-0.5"
                                    }`}
                            >
                                {formStatus === "submitting" ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : formStatus === "success" ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Message Sent</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Request</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
