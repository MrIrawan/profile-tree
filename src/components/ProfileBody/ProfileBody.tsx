import { ProfileBodyType } from "../../types/type";
import MediaSocial from "../MediaSocial/MediaSocial";

export default function ProfileBody({ children }: ProfileBodyType) {
    return (
        <section>
            <div className="container w-full">
                { children }
            </div>
        </section>
    );
}

function ProfileName() {
    return (
        <div className=" flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-blue-500">Farrel Irawan</h2>
            <p className="text-gray-600 text-sm">Frontend Developer</p>
        </div>
    );
}

function ProfileMediaSocial() {
    return(
        <div className="flex gap-3">
            <MediaSocial />
        </div>
    );
}

ProfileBody.ProfileName = ProfileName;
ProfileBody.ProfileMediaSocial = ProfileMediaSocial;
