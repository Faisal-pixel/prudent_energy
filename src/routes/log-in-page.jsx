import React from "react";
import {ReactComponent as SaphireProcureLogo} from "../assets/saphire_procure_logo.svg"
import {ReactComponent as PrudentEnergyLogo} from "../assets/prudent_energy_logo.svg"

const LogInPage = () => {
    return <>
        <div className="container h-screen w-screen bg-primaryBlue py-7 px-7 overflow-hidden">
            <header className=" flex  flex-grow ">
                <div id="saphire_procure_logo" className=" basis-2/4 flex-shrink">
                    <SaphireProcureLogo />
                </div>
                <div id="prudent_energy_logo" className=" basis-2/4 flex-shrink">
                    <PrudentEnergyLogo />
                </div>
            </header>
            <section className="flex items-center justify-center h-full">
                <div className="basis-2/4 space-y-8 text-xl bg-white p-14 rounded-lg">
                    <h2 className="text-primaryBlue font-bold text-5xl text-center">Login</h2>
                    <p className="text-primaryBlue font-bold text-center">Please Select your account type to login.</p>
                    <div className="flex justify-around">
                        <a href="#" className="rounded-md bg-primaryBlue py-1 px-5 text-white border border-2 border-primaryBlue hover:bg-white hover:text-primaryBlue">Login as Employee</a>
                        <a href="#" className="rounded-md bg-primaryBlue py-1 px-5 text-white border border-2 border-primaryBlue hover:bg-white hover:text-primaryBlue">Login as Bidder</a>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default LogInPage;