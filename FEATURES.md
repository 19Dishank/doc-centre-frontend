# 🚀 DocCenter Frontend

> A modern multi-tenant document management and collaboration platform built with **React** and **Vite**.

DocCenter enables organizations to securely upload, organize, share, and manage documents with powerful **Role-Based Access Control (RBAC)** and **API management capabilities**.

---

## ✨ Highlights

* 🏢 Multi-tenant architecture
* 🌐 Subdomain-based tenant routing
* 🔐 Secure authentication & onboarding
* 👥 Role-Based Access Control (RBAC)
* 🛡️ Granular permission management
* 📂 File & folder management
* 🔗 Secure document sharing
* 🗑️ Recycle Bin & recovery system
* 🔑 API key management
* 📊 Dashboard analytics
* ⚙️ Organization & billing settings

---

## 📚 Table of Contents

* [Project Overview](#project-overview)
* [Authentication & Onboarding](#authentication--onboarding)
* [Dashboard](#dashboard)
* [File Management](#file-management)
* [Users Management](#users-management)
* [Roles & Permissions](#roles--permissions)
* [API Management](#api-management)
* [Settings](#settings)
* [Permission System](#permission-system)
* [Workflows](#workflows)

---

# 🏗️ Project Overview

DocCenter is a SaaS document management platform designed for organizations that need secure storage, collaboration, and permission-controlled document access.

### Core Capabilities

| Feature             | Description                                   |
| ------------------- | --------------------------------------------- |
| Multi-Tenant        | Dedicated tenant environment using subdomains |
| Authentication      | Secure login and onboarding workflows         |
| Document Management | Upload, organize, preview, and share files    |
| User Management     | Invite and manage team members                |
| Permissions         | Granular role-based access control            |
| API Access          | Generate and manage API credentials           |
| Billing             | Subscription and plan management              |

---

# 🔐 Authentication & Onboarding

## Home Page (`/`)

Public marketing website featuring:

* Hero section
* Feature showcase
* Platform statistics
* Pricing comparison
* Customer trust indicators
* CTA sections
* Public shared document access (`/shared/:id`)

---

## Login (`/login`)

### Platform Login

Used from:

app.docenter.com

**Flow**

1. Enter email address
2. System identifies tenant
3. Redirect to tenant login page

### Tenant Login

Used from:

tenant.docenter.com

**Flow**

1. Enter email and password
2. Authenticate user
3. Redirect to dashboard

---

## Tenant Onboarding (`/onboarding`)

### Purpose

Create a new organization and administrator account.

### Process

1. Enter organization details
2. Enter administrator details
3. Submit onboarding form
4. Backend generates activation token
5. Activation email sent to administrator

---

## Account Activation (`/onboarding/activate`)

### Token Validation States

| State   | Action                      |
| ------- | --------------------------- |
| Valid   | Display password setup form |
| Expired | Show resend activation link |
| Invalid | Redirect to onboarding      |

### Successful Activation

* Set password
* Create administrator account
* Redirect to success page
* Auto redirect to login after 5 seconds

---

## Forgot Password

### Step 1 — Email Verification

`/forgot-password`

* User enters email
* OTP sent to email address

### Step 2 — OTP Validation

`/forgot-password/verify`

* User enters OTP
* Backend validates OTP

### Step 3 — Password Reset

`/forgot-password/reset`

* Enter new password
* Redirect to success page
* Auto redirect to login

---

## User Invitation

`/users/invite`

### Flow

1. Admin invites user
2. Email with secure token is sent
3. User opens invitation link
4. User sets password
5. Account activated successfully

---

# 📊 Dashboard

`/dashboard`

Central overview of organizational activity.

### Features

* 📈 Usage analytics
* 📄 Document statistics
* 💾 Storage consumption
* 🔑 API usage metrics
* 🕒 Recent uploads
* 👋 Personalized welcome section

---

# 📂 File Management

`/files`

Complete document organization system.

---

## File Upload

Supported formats include:

* PDF
* DOCX
* XLSX
* PPTX
* Images
* Audio
* Video

Features:

* Single upload
* Progress tracking
* Instant listing updates

---

## Folder Management

* Create folders
* Nested folders
* Breadcrumb navigation
* Parent folder traversal

Example:

Documents → Projects → 2025 → Contracts

---

## Search & Filtering

### Search

* Full-text document name search

### Sorting

* Newest First
* Oldest First
* Name A-Z
* File Size

### URL Persistence

Filter and search states remain in URL parameters.

---

## File Actions

| Action   | Description          |
| -------- | -------------------- |
| Preview  | View before download |
| Download | Save locally         |
| Share    | Generate public link |
| Rename   | Update file name     |
| Delete   | Move to trash        |

---

## File Preview Support

### Documents

* PDF Viewer
* DOCX
* PPTX
* XLSX

### Media

* Images
* Videos
* Audio files

---

## Document Sharing

Generate secure public links with:

* Expiration date
* Access restrictions

---

# 🗑️ Recycle Bin

`/trash`

### Features

* View deleted items
* Restore documents
* Permanently delete files
* 30-day automatic cleanup

> ⚠️ Permanently deleted files cannot be recovered.

---

# 👥 Users Management

`/users`

Manage organization members.

### User Information

* Avatar
* Name
* Email
* Role
* Last Active
* Available Actions

### User Actions

* Invite User
* Edit User
* Change Role
* Remove User

### Filters

* Search by name
* Search by email
* Filter by role

---

# 🛡️ Roles & Permissions

`/roles`

Create and manage custom access roles.

### Permission Categories

#### Document Permissions

* Create
* Read
* Update
* Delete
* Share

#### User Permissions

* View
* Create
* Edit
* Remove

#### Role Permissions

* View
* Create
* Update
* Delete

### Role Actions

* Create Role
* Edit Role
* Delete Role
* Assign Permissions

---

# 🔑 API Management

## API Keys

`/credentials/api-keys`

### Features

* Generate API keys
* Reveal secret keys
* Copy to clipboard
* View usage history
* Revoke keys

### Security

> Store generated API keys securely. Keys may not be fully visible again after creation.

---

# ⚙️ Settings

---

## User Settings

`/settings/user`

### Features

* Update profile information
* Change password

---

## Organization Settings

`/settings/organization`

Administrator only.

### Editable

* Organization Name
* Slogan
* Logo
* Website URL

### Read Only

* Slug
* Creation Date
* Member Count
* Current Plan

---

## Billing

`/settings/billing`

### Available Plans

| Plan    | Price    | Features                          |
| ------- | -------- | --------------------------------- |
| Starter | Free     | 5 GB storage, 3 users             |
| Pro     | $9/month | Unlimited users, API access, RBAC |
| Elite   | Custom   | Enterprise features               |

### Billing Features

* Monthly / Yearly billing
* Payment methods
* Invoice downloads
* Plan upgrades
* Subscription cancellation

---

## Notifications

`/settings/notifications`

### Email Notifications

* Upload notifications
* Weekly reports
* Security alerts
* API usage warnings

### In-App Notifications

* Role changes
* Storage warnings
* System announcements

---

# 🔒 Permission System

| Permission       | Description               |
| ---------------- | ------------------------- |
| VIEW_DOCUMENT    | View documents            |
| CREATE_DOCUMENT  | Upload documents          |
| EDIT_DOCUMENT    | Modify documents          |
| DELETE_DOCUMENT  | Delete documents          |
| SHARE_DOCUMENT   | Share documents           |
| RESTORE_DOCUMENT | Restore deleted documents |
| VIEW_USER        | View users                |
| CREATE_USER      | Invite users              |
| EDIT_USER        | Modify users              |
| DELETE_USER      | Remove users              |
| VIEW_ROLE        | View roles                |
| CREATE_ROLE      | Create roles              |
| EDIT_ROLE        | Modify roles              |
| DELETE_ROLE      | Delete roles              |
| VIEW_API_KEY     | View API keys             |
| CREATE_API_KEY   | Generate API keys         |
| DELETE_API_KEY   | Revoke API keys           |
| VIEW_SETTINGS    | View settings             |
| EDIT_SETTINGS    | Modify settings           |
| VIEW_BILLING     | View billing              |

---

# 🔄 Core Workflows

## Tenant Creation

```text
Onboarding
    ↓
Activation Email
    ↓
Password Setup
    ↓
Success Page
    ↓
Login
    ↓
Dashboard
```

---

## User Invitation

```text
Invite User
    ↓
Email Sent
    ↓
Open Invitation Link
    ↓
Set Password
    ↓
Account Activated
```

---

## Document Lifecycle

```text
Upload
    ↓
Organize
    ↓
Share
    ↓
Delete
    ↓
Recycle Bin
    ↓
Restore or Permanently Delete
```

---

## RBAC Workflow

```text
User Login
    ↓
Role Retrieved
    ↓
Permissions Loaded
    ↓
Route Protection
    ↓
UI Permission Checks
    ↓
Backend Authorization
```

---

# 🎯 Tech Stack

* React
* Vite
* TypeScript
* React Router
* TanStack Query
* Tailwind CSS
* RBAC Architecture
* Multi-Tenant SaaS Design

---

## License

Private proprietary software © DocCenter.
