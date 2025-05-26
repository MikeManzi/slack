import { Sidebar } from "@/components/Sidebar";
import { Toolbar } from "@/components/toolbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}
const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div>
      <Toolbar />
      <div className=" flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
