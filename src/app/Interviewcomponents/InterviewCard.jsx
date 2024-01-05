import React from "react";
import Avatar from "react-avatar";
import { RxCrossCircled } from "react-icons/rx";
import { GrLinkedin } from "react-icons/gr";
function InterviewCard({
  name,
  userPhoto,
  company,
  linkedin_id,
  created_on,
  selected,
  position,
  round,
  company_logo,
}) {
  return (
    <div className="my-3 py-4 text-black px-4 bg-[#e9ecef] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            {!userPhoto && (
              <Avatar
                className="cursor-pointer items-center mr-8 px-2 "
                name={name}
                size="50"
                round="20px"
              ></Avatar>
            )}
            {userPhoto && <img src={userPhoto} alt="userPhoto" />}
          </div>
          <div>
            <div>
              <span className="text-normal md:text-xl font-semibold md:font-bold font-serif">{name}</span> <span>| Round {round}</span>
            </div>
            <div>{position}</div>
          </div>
        </div>
        <div>
          {!company_logo && (
            <Avatar
              className="cursor-pointer items-center mr-8 px-2 "
              name={company}
              size="50"
              round="20px"
            ></Avatar>
          )}
          {company_logo && <img src={company_logo} alt="company_logo" />}
        </div>
      </div>

      <div className="h-[2px] my-4 bg-slate-800"></div>

      <div className="flex justify-between items-center">
        <div>
          {selected && (
            <div className="flex justify-center items-center gap-2 font-semibold text-green-600">
              <RxCrossCircled />
              <div>Seleted</div>
            </div>
          )}

          {!selected && (
            <div className="flex justify-center items-center text-red-800 gap-2 font-semibold">
              <RxCrossCircled />
              <div>Not Seleted</div>
            </div>
          )}
        </div>
        {linkedin_id && (
          <div className="flex justify-between gap-2 items-center">
            <span className="hover:text-blue-700 font-medium cursor-pointer hover:font-semibold">Connect me </span> <GrLinkedin className="text-blue-700" />
          </div>
        )}

        <div>Published on : {created_on}</div>
      </div>
    </div>
  );
}

export default InterviewCard;
