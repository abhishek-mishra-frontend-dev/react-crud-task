## 📸 Preview
![App Screenshot](./screenshot.png)


🚀 User Management System (Schema-Driven)
A robust React + TypeScript CRUD application featuring a unique Schema-Driven UI. This architecture ensures that the entire interface (Forms & Tables) adapts automatically to data definitions.

🔗 [Live Demo Link]


🧠 The Core Innovation: Schema-Driven UI
[x] Unlike traditional apps where you manually code every input and table cell, this project uses a Single Source of Truth.

[x] Zero-Effort Updates: Adding a field like Date of Birth only requires a 4-line addition to the schema file.

[x] Automatic Sync: The Form and the Table stay perfectly in sync without touching their respective components.

🏗️ Tech Stack
[x] Frontend: React (Vite) + TypeScript

[x] State & Forms: React Hook Form

[x] Styling: Tailwind CSS

[x] API: Axios + JSON Server (Mock API)

[x] Feedback: React Hot Toast + Skeleton Loading


📁 Project Structure
src/
 ├─ api/              → Axios instances and endpoints
 ├─ components/
 │    ├─ common/      → UI Kit: Spinner, Popups, Skeleton
 │    ├─ user/        → Feature: UserForm, UserTable
 │    ├─ form-utilities/→ Feature: Custom Input
 ├─ helper/            → UseUsers (Logic & CRUD operations)
 ├─ schema/           → user-form-schema.ts (THE BRAIN)
 └─ types/            → TypeScript interfaces


➕ How to add a field in 10 seconds
Navigate to src/schema/user-form-schema.ts and add:

{
  name: "phone_number",
  label: "Phone Number",
  type: "tel",
  required: true
}

No other files need to be changed. 
The validation, the input UI, and the table column will render automatically.

✨ Key Features
[x] Full CRUD: Create, Read, Update, Delete.

[x] Context-Aware Editing: Inline adding, Modal-based editing.

[x] Advanced UI: Loading skeletons, button spinners, and toast notifications.

[x] Logic Separation: UI components are "dumb"; logic lives in custom hooks.

🧪 Getting Started
1. Install dependencies
   npm install

2. Start the Mock API (Essential)
   The app relies on json-server to simulate a real backend.
   npm run server
   API runs at: http://localhost:5000/users

3. Run the App
   npm run dev
  

🎯 Implementation ChecklistCriteriaImplementationClean StructureModular components + Custom HooksValidationSchema-based rules via React Hook FormExtensibilitySchema-driven UIType Safety100% TypeScript coverage

🙌 Author
Abhishek Mishra
