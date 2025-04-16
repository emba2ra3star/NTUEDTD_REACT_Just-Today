import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
export default function TodoList() {
    return (
      <div className="flex bg-green-100 min-h-screen p-8">
        <div className="w-1/2 pr-6">
          <FormSection />
        </div>

        <div className="w-1/2 bg-white p-6 rounded shadow">
          <PreviewSection />
        </div>
      </div>

    )
  }
  
  