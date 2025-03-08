import { AppWrapperType } from "../../types/type";

export default function AppWrapper({ children }: AppWrapperType) {
    return (
        <>
        <header className="bg-blue-500 px-4 py-2">
            <div className="container w-full mx-auto">
                <p className="text-white text-base font-semibold w-fit mx-auto">welcome users! nice to meet you all.</p>
            </div>
        </header>
            { children }
        <footer>
            <div className="container w-full mx-auto">
                <p>Copyright &copy; 2025 @irawanssfarrel</p>
            </div>
        </footer>
        </>
    )
}