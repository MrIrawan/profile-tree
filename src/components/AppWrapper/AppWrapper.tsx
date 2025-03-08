import { AppWrapperType } from "../../types/type";

export default function AppWrapper({ children }: AppWrapperType) {
    return (
        <>
        <header className="bg-blue-500 px-4 py-2">
            <div className="container w-full mx-auto">
                <p className="text-white leading-relaxed text-base font-medium w-fit mx-auto">welcome users! nice to meet you all.</p>
            </div>
        </header>
            { children }
        <footer className="bg-gray-200 px-4 py-5">
            <div className="container w-full mx-auto">
                <p className="text-gray-600 leading-relaxed text-base font-medium">Copyright &copy; 2025 @irawanssfarrel</p>
            </div>
        </footer>
        </>
    )
}