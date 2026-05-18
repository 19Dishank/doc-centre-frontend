import React, { useState } from "react";
import { 
  User, 
  Lock, 
  Settings, 
  Save, 
  Shield, 
  KeyRound 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function UserSettings() {
  // Form States
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 019-2834",
    role: "Admin",
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    twoFactor: false,
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // Input Handlers
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurityData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Logic Handlers
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Saving user identity configurations:", profileData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Saving updated security hash payload:", securityData);
    setShowPasswordForm(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 pb-8">
      
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8 text-zinc-950 tracking-tight">User Settings</h1>
        <p className="text-zinc-600 text-sm leading-5">
          Manage your account profile, change security credentials, and configure application preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* SECTION 1: PROFILE CARD */}
        <Card className="p-4 sm:p-6 flex flex-col gap-5 shadow-sm">
          <CardHeader className="p-0 gap-1">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center shrink-0">
                <User className="size-5 text-[#2b7fff]" />
              </div>
              <h2 className="font-semibold text-lg leading-7 text-zinc-950">Profile Details</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-5">
              Update your core personal information and reachable contact addresses.
            </p>
          </CardHeader>

          <CardContent className="p-0">
            <form onSubmit={handleProfileSubmit} className="space-y-5">
              
              {/* Profile Avatar Row */}
              <div className="flex items-center gap-4 pb-4 border-zinc-200 border-b">
                <div className="size-14 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] font-bold text-lg flex justify-center items-center border border-[#2b7fff]/20 shrink-0 select-none">
                  {profileData.fullName.split(" ").map((n) => n[0]).join("")}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  className="text-zinc-700 border-zinc-200 h-9 font-medium shadow-sm"
                >
                  Change Avatar
                </Button>
              </div>

              {/* Input Forms Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm text-zinc-800">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white text-zinc-900 font-medium"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm text-zinc-800">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white text-zinc-900 font-medium"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm text-zinc-800">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white text-zinc-900 font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm text-zinc-800">Assigned Privilege Role</label>
                  <div className="flex items-center gap-2 w-full h-10 px-3 text-sm border border-zinc-200 bg-zinc-50 text-zinc-600 rounded-lg cursor-not-allowed select-none">
                    <Shield className="size-4 text-[#2b7fff] shrink-0" />
                    <span className="font-semibold">{profileData.role}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end pt-2">
                <Button type="submit" className="bg-[#2b7fff] text-blue-50 px-4 h-10 text-sm w-full sm:w-auto gap-2">
                  <Save className="size-4" />
                  Save Profile Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* SECTION 2: SECURITY CARD */}
        <Card className="p-4 sm:p-6 flex flex-col gap-5 shadow-sm">
          <CardHeader className="p-0 gap-1">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-purple-50 border border-purple-100 flex justify-center items-center shrink-0">
                <Lock className="size-5 text-purple-600" />
              </div>
              <h2 className="font-semibold text-lg leading-7 text-zinc-950">Security & Credentials</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-5">
              Maintain strong security standards by updating access factors regularly.
            </p>
          </CardHeader>

          <CardContent className="p-0">
            {!showPasswordForm ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-semibold text-zinc-900">Account Access Password</span>
                  <span className="text-xs text-zinc-600 leading-normal">Update your current functional login passcode security tokens.</span>
                </div>
                <Button
                  type="button"
                  onClick={() => setShowPasswordForm(true)}
                  className="bg-[#2b7fff] text-blue-50 text-xs px-3 h-9 w-full sm:w-auto gap-1.5 shrink-0"
                >
                  <KeyRound className="size-3.5" />
                  Change Password
                </Button>
              </div>
            ) : (
              <form onSubmit={handlePasswordSubmit} className="space-y-4 pt-4 border-t border-zinc-100">
                {/* Fixed Grid Breakpoints */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-medium text-sm text-zinc-800">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={securityData.currentPassword}
                      onChange={handleSecurityChange}
                      className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-medium text-sm text-zinc-800">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={securityData.newPassword}
                      onChange={handleSecurityChange}
                      className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-medium text-sm text-zinc-800">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={securityData.confirmPassword}
                      onChange={handleSecurityChange}
                      className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowPasswordForm(false)}
                    className="border-zinc-200 text-zinc-700 h-9 text-xs w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-[#2b7fff] text-blue-50 h-9 text-xs w-full sm:w-auto">
                    Update Password
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* SECTION 3: APP PREFERENCES */}
        <Card className="p-4 sm:p-6 flex flex-col gap-4 shadow-sm">
          <CardHeader className="p-0 gap-1">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-teal-50 border border-teal-100 flex justify-center items-center shrink-0">
                <Settings className="size-5 text-teal-700" />
              </div>
              <h2 className="font-semibold text-lg leading-7 text-zinc-950">Preferences</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-5">
              Configure real-time system behaviors and protective validation properties.
            </p>
          </CardHeader>

          <CardContent className="flex p-0 flex-col divide-y divide-zinc-100">
            {/* Preference Option 1 */}
            <div className="flex items-start justify-between py-4 gap-4">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-semibold text-zinc-900">System Activity Alerts</span>
                <span className="text-xs text-zinc-600 leading-normal">Receive transactional logs and status changes via email.</span>
              </div>
              <Checkbox
                id="pref-email"
                checked={preferences.emailNotifications}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, emailNotifications: !!checked }))
                }
                className="border-zinc-300 data-[state=checked]:bg-[#2b7fff] data-[state=checked]:border-[#2b7fff] shrink-0 mt-0.5"
              />
            </div>

            {/* Preference Option 2 */}
            <div className="flex items-start justify-between py-4 gap-4">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-semibold text-zinc-900">Two-Factor Step Check</span>
                <span className="text-xs text-zinc-600 leading-normal">Enforce an advanced high-security second step layout confirmation.</span>
              </div>
              <Checkbox
                id="pref-mfa"
                checked={preferences.twoFactor}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, twoFactor: !!checked }))
                }
                className="border-zinc-300 data-[state=checked]:bg-[#2b7fff] data-[state=checked]:border-[#2b7fff] shrink-0 mt-0.5"
              />
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}