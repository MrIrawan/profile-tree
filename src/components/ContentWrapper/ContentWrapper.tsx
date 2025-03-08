import { ContentWrapperType } from "../../types/type";

export default function ContentWrapper({ children }: ContentWrapperType) {
    return (
        <main className="w-[30%] md:w-[60%] lg:w-[50%] mx-auto">
            { children }
        </main>
    );
}