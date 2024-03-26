import { GiMailbox} from "react-icons/gi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="fixed bg-base rounded-lg p-6 shadow-md w-1/4 h-screen">
      <div className="flex justify-start items-center gap-4 mb-6">
        <img
          className="rounded-full border-2 border-transparent p-1"
          src={"portrait.PNG"}
          alt="Angelica Strong"
          width="80"
          height="80"
        />

        <div>
          <h1 className="text-white text-xl font-semibold mb-1" title="Angelica Strong">
            Angelica Strong
          </h1>
          <p className="bg-secondary text-center text-white text-sm font-light px-2 py-1 rounded">
            Full Stack Developer
          </p>
        </div>
      </div>

      <div className="my-4">
        <div className="h-px bg-body my-4"></div>
        <ul>
          <li className="flex items-center gap-4 mb-4">
            <GiMailbox className="text-xl text-primary" />
            <div>
              <p className="text-highlight text-xs uppercase">Email</p>
              <a href="mailto:angelica.strong0725@gmail.com" className="text-white">
                angelica.strong0725@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4 mb-4">
            <FaGithub className="text-xl text-primary"/>
            <div>
              <p className="text-highlight text-xs uppercase">Github</p>
                <a href="https://github.com/astro0725" className="text-white">
                  astro0725
                </a>
            </div>
          </li>

          <li className="flex items-center gap-4 mb-4">
            <FaLinkedinIn className="text-xl text-primary"/>
            <div>
              <p className="text-highlight text-xs uppercase">Linkedin</p>
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