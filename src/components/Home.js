import { Component } from "react";

// src/components/Home.js
class Home extends Component {
  render() {
    return (
        <section id="home">
            <div className="container mx-auto flex bg-slate-200 px-10 py-5">
                <div className="flex flex-col w-1/2 lg:px-14 px-0 justify-center">
                    <h6 className="pb-1 text-sky-400">Hi, I am</h6>
                    <h1 className="pb-3 sm:text-3xl font-semibold text-gray-900">Nhat Tran</h1>
                    <h6 className="pb-2 font-semibold text-gray-900">Web Developer</h6>
                    <p className="font-poppins">Lorem fafjafajflajsf a faldfkjaslk;fjasfja ffafafdasl </p>
                </div>
                <img className="flex w-1/2 max-w-xs" src="./avatar.jpg" alt="avatar" />
            </div>
        </section>
    );
  }
}
export default Home;
