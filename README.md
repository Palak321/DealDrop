## 🚀 **DealDrop**

DealDrop is a full-stack price tracking application that helps users monitor product prices across e-commerce websites and receive email notifications when prices drop.

Built with Next.js, Supabase, Firecrawl, and Tailwind CSS, the application automates product price monitoring, eliminating the need for users to manually check prices repeatedly.

## ✨ Features

- 🔍 Track products from multiple e-commerce websites
- 📈 View product price history and trends
- 🔐 Secure authentication using Google OAuth
- ⏰ Automated price monitoring through scheduled cron jobs
- 📧 Email notifications on price drops
- 📱 Responsive UI for desktop and mobile devices
- 🗄️ Secure data storage using Supabase
- 🚀 Automatic deployment with Vercel

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|-------------|
| Frontend | Next.js, React, Tailwind CSS, shadcn/ui |
| Backend | Next.js API Routes, Server Actions |
| Database | Supabase, PostgreSQL |
| Authentication | Google OAuth, Supabase Auth |
| External Services | Firecrawl, Resend |
| Deployment | Vercel |

## 🗄️ Database Design

The application uses **Supabase PostgreSQL** to store product information and maintain historical price records.

### Products Table

| Field | Type | Description |
|---------|---------|-------------|
| id | UUID | Unique product identifier |
| user_id | UUID | Associated user |
| url | TEXT | Product URL |
| name | TEXT | Product name |
| current_price | NUMERIC | Latest tracked price |
| currency | TEXT | Product currency |
| image_url | TEXT | Product image |
| created_at | TIMESTAMP | Product creation time |
| updated_at | TIMESTAMP | Last update time |

### Price History Table

| Field | Type | Description |
|---------|---------|-------------|
| id | UUID | Unique history record |
| product_id | UUID | Associated product |
| price | NUMERIC | Recorded product price |
| currency | TEXT | Product currency |
| checked_at | TIMESTAMP | Time when price was checked |

## 🚀 Deployment

The application is deployed on **Vercel** using a serverless architecture. The GitHub repository is connected to Vercel, enabling automatic deployments whenever new code is pushed.

### Deployment Workflow

```text
Developer Pushes Code
          ↓
GitHub Repository Updated
          ↓
Vercel Detects Changes
          ↓
Build Process Starts
          ↓
Application Deployed
