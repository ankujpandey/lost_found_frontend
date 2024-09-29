import { HiMenu } from "react-icons/hi";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import {
  FaUsers,
  FaTachometerAlt,
  FaArrowCircleRight,
  FaBriefcase,
  FaListAlt,
  FaCircle,
  FaCheck,
  FaEdit,
  FaList,
  FaIdCard,
  FaInfoCircle,
  FaUsersCog,
  FaPlus,
  FaPowerOff,
  FaAngleDoubleLeft,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";
import { MdKeyboardDoubleArrowRight,MdDelete } from "react-icons/md";
import { PiArrowsDownUp } from "react-icons/pi";


export const Icons = {
  HiMenu: <HiMenu />,
  AiOutlineFullscreenExit: <AiOutlineFullscreenExit />,
  FaCircle: (
    <FaCircle
      style={{
        color: "#00A9ff",
      }}
    />
  ),
  FaTachometerAlt: <FaTachometerAlt />,
  FaListAlt: <FaListAlt />,
  FaEdit: <FaEdit />,
  FaList: <FaList />,
  FaIdCard: <FaIdCard />,
  FaInfoCircle: <FaInfoCircle />,
  FaUsersCog: <FaUsersCog />,
  FaPowerOff: <FaPowerOff />,
  arrow: <MdKeyboardDoubleArrowRight />,
  FaUsers: <FaUsers />,
  FaArrowCircleRight: <FaArrowCircleRight />,
  FaBriefcase: <FaBriefcase />,
  PiArrowsDownUp: <PiArrowsDownUp />,
  FaCheck :<FaCheck/>,
  MdDelete:<MdDelete/>,
  FaPlus:<FaPlus/>,
  FaAngleDoubleLeft:<FaAngleDoubleLeft style={{
    marginBottom: "4px"
  }}/>,
  FaSignInAlt : <FaSignInAlt/>,
  FaUserPlus : <FaUserPlus/>
};
