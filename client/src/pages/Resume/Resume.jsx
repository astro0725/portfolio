import React from 'react';
import { FaBookReader, FaBookmark, FaStar, FaDownload } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section className='max-h-96 overflow-auto'>
      <header>
        <h2 className="mb-2 text-highlight text-2xl font-bold">Resume</h2>
      </header>

      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-tertiary text-white w-7 h-7 flex justify-center items-center text-sm shadow-sm rounded-lg">
            <FaStar />
          </div>
          <h3 className="text-white text-lg font-semibold">Skills</h3>
        </div>
        <ul>
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={50} />
        </ul>
      </div>

      <div className="mt-5 mb-7">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-tertiary text-white w-7 h-7 flex justify-center items-center text-sm shadow-sm rounded-lg">
            <FaBookReader />
          </div>
          <h3 className="text-white text-lg font-semibold">Education</h3>
        </div>
        <ol className="text-sm">
          <TimelineItem
            title="University school of the arts"
            date="2007 — 2008"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="New york academy of art"
            date="2006 — 2007"
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          />
          <TimelineItem
            title="High school of art and design"
            date="2002 — 2004"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          />
        </ol>
      </div>

      <div className="mb-7">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-tertiary text-white w-7 h-7 flex justify-center items-center text-sm shadow-sm rounded-lg">
            <FaBookmark />
          </div>
          <h3 className="text-white text-lg font-semibold">Experience</h3>
        </div>
        <ol className="text-sm">
          <TimelineItem
            title="Creative director"
            date="2015 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Art director"
            date="2013 — 2015"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div>

      <div>
        <div className="flex items-center gap-4 mt-6 mb-6">
          <div className="relative bg-tertiary text-white w-7 h-7 flex justify-center items-center text-sm shadow-sm rounded-lg">
            <PiCertificateFill />
          </div>
          <h3 className="text-white text-lg font-semibold">Certification</h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative p-2 mb-5 bg-body rounded-lg shadow-sm z-1">
            <div className="text-center text-white">
              <h4 className="text-lg font-medium">Full Stack Development</h4>
              <iframe 
                title="Full Stack Development Certification" 
                src="/UCBCERT.pdf" 
                height="200"
                style={{border: "none", maxWidth: "100%", display: "block", marginLeft: "auto", marginRight: "auto"}}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mt-6 mb-6">
          <div className="relative bg-tertiary text-white w-7 h-7 flex justify-center items-center text-sm shadow-sm rounded-lg">
            <FaDownload />
          </div>
          <h3 className="text-white text-lg font-semibold">Download</h3>
        </div>
        <div className="flex items-center justify-center">
          <p className='text-white font-light text-sm'>Want to have a copy of my resume? Click the button below!</p>
        </div>
        <div className='m-5 flex items-center justify-center'>
          <a
            href={'/resume.pdf'}
            download
            className='bg-secondary font-medium text-sm text-white py-2 px-4 rounded-lg shadow-sm flex items-center justify-center'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;