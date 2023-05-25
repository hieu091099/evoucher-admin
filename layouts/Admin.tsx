// layouts/AdminLayout.tsx
import React from 'react';
interface ContainerProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}
const AdminLayout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <header>Admin Header</header>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
};

export default AdminLayout;
