import { GiMailbox} from "react-icons/gi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="rounded-lg p-15 shadow-1 z-10 mb-15 max-h-112 overflow-hidden transition-2">
      <div className="relative flex justify-start items-center gap-15">
        <figure className="rounded-full">
          <img
            src={"/portrait.png"}
            alt="Angelica Strong"
            width="80"
          />
        </figure>

        <div>
          <h1 className="text-white text-2xl font-medium tracking-tight mb-2.5" title="Angelica Strong">
            Angelica Strong
          </h1>

          <p className="bg-secondary text-white text-xs font-light max-w-max px-3 py-12 rounded-md">
            Full Stack developer
          </p>
        </div>
      </div>

      <div>
        <div className="w-full h-px bg-base my-16"></div>

        <ul className="grid grid-cols-1 gap-16">
          <li className="min-w-full flex items-center gap-16">
            <div className="w-48 h-48 rounded-lg text-18">
              <GiMailbox/>
            </div>

            <div className="max-w-calc-100-minus-64 w-calc-100-minus-64">
              <p className="uppercase mb-2 text-highlight">Email</p>

              <a href="mailto:angelica.strong0725@gmail.com" className="text-white">
                angelica.strong0725@gmail.com
              </a>
            </div>
          </li>

            <li className="min-w-full flex items-center gap-16">
              <div className="w-48 h-48 rounded-lg text-18">
                <FaGithub />
              </div>

              <div className="max-w-calc-100-minus-64 w-calc-100-minus-64">
                <p className="uppercase mb-2 text-highlight">Github</p>

                <a href="https://github.com/astro0725" className="text-white">
                  astro0725
                </a>
              </div>
            </li>

            <li className="min-w-full flex items-center gap-16">
              <div className="w-48 h-48 rounded-lg text-18">
                <FaLinkedinIn />
              
              </div>

              <div className="max-w-calc-100-minus-64 w-calc-100-minus-64">
                <p className="uppercase mb-2 text-highlight">Linkedin</p>

                <a href="https://www.linkedin.com/in/angelica-strong/" className="text-white">
                  Angelica Strong
                </a>
              </div>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside