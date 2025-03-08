export default function ProfileHeader() {
    return (
        <section>
            <div className="container w-full">
                <div className="w-full h-[250px]">
                <img src="background-mozaic.jpg" alt="" className="w-full h-full object-cover"/>
                    <div className="w-[200px] rounded-full overflow-hidden ring-4 ring-white mx-auto translate-y-[-50%]">
                        <img src="farrel.JPG" alt="foto farrel" />
                    </div>
                </div>
            </div>
        </section>
    );
}