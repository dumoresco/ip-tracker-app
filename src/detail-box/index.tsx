import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface DetailProps {
  ip: string;
  country: string;
  region: string;
  timezone: string;
  isp: string;
  isLoading?: boolean;
}

const DetailBox: React.FC<DetailProps> = ({
  ip,
  region,
  timezone,
  country,
  isp,
  isLoading,
}) => {
  return (
    <div className="flex md:w-screen md:items-start items-center text-center md:text-left flex-column md:justify-center md:w-5/6 flex-col z-50  md:flex-row">
      <div className="flex flex-col items-center md:items-start justify-center  mb-5 md:mb-0 w-full md:m-5">
        <span className="font-semibold text-xs text-gray-500 uppercase">
          ip address
        </span>
        {isLoading ? (
          <Skeleton height={30} width={150} />
        ) : (
          <p className="font-medium text-xl text-darkGray ">{ip}</p>
        )}
      </div>
      <div className="flex flex-col items-center md:items-start justify-center mb-5 md:mb-0 w-full md:m-5">
        <span className="font-semibold text-xs text-gray-500 uppercase">
          location
        </span>
        {isLoading ? (
          <Skeleton height={30} width={220} />
        ) : (
          <p className="font-medium text-xl text-darkGray ">
            {region}, {country}
          </p>
        )}
      </div>{" "}
      <div className="flex flex-col items-center md:items-start justify-center mb-5 md:mb-0 w-full md:m-5">
        <span className="font-semibold text-xs text-gray-500 uppercase">
          timezone
        </span>
        {isLoading ? (
          <Skeleton height={30} width={120} />
        ) : (
          <p className="font-medium text-xl text-darkGray ">UTC {timezone}</p>
        )}
      </div>{" "}
      <div className="flex flex-col items-center md:items-start justify-center mb-5 md:mb-0 w-full md:m-5">
        <span className="font-semibold text-xs text-gray-500 uppercase">
          isp
        </span>
        {isLoading ? (
          <Skeleton height={30} width={180} />
        ) : (
          <p className="font-medium text-xl text-darkGray ">{isp}</p>
        )}
      </div>
    </div>
  );
};

export default DetailBox;
