import { useState } from "react";
import CampaignTrack from "../../public/CampaignTrack.svg";
import Customer from "../../public/Customer.svg";
import EcomIcon from "../../public/EcomIcon.svg";
import Marketplace from "../../public/Marketplace.svg";

const SidebarDropdown = () => {

  const className = 'rotate-180'
  const [click,setClick] = useState(0)
  console.log(click)


  const dropDownItem = [
    {
      id: 1,
      icon: EcomIcon,
      dropDownName: "Ecom",
      collapsible: true,
      item: [
        { id: 1, name: "Insight", link: "/insight" },
        { id: 2, name: "Product List", link: "/product-list" },
      ],
    },
    {
      id: 2,
      icon: Marketplace,
      dropDownName: "Marketplace",
      collapsible: true,
      item: [
        { id: 1, name: "Insight", link: "/insight" },
        { id: 2, name: "Product List", link: "/product-list" },
      ],
    },
    {
      id: 3,
      icon: CampaignTrack,
      dropDownName: "Campaign Track",
      collapsible: false,
    },
    {
      id: 4,
      icon: Customer,
      dropDownName: "Customer",
      collapsible: true,
      item: [{ id: 1, name: "Insight", link: "/insight" }],
    },
  ];

  return (
    <div>
      {dropDownItem &&
        dropDownItem.map((dropDown) => (
          <div key={dropDown.id} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div>
                  <img src={dropDown.icon} alt={dropDown.icon} />
                </div>
                <div>{dropDown.dropDownName}</div>
              </div>
              <div className="cursor-pointer" onClick={()=> setClick(dropDown.id)}>
                <svg
                  className= {`${click===dropDown.id ? 'rotate-180' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.64645 7.65967C5.84171 7.44678 6.15829 7.44678 6.35355 7.65967L9.64645 11.25C9.84171 11.4629 10.1583 11.4629 10.3536 11.25L13.6464 7.65968C13.8417 7.44678 14.1583 7.44678 14.3536 7.65968C14.5488 7.87257 14.5488 8.21775 14.3536 8.43065L11.0607 12.021C10.4749 12.6597 9.52513 12.6597 8.93934 12.021L5.64645 8.43065C5.45118 8.21775 5.45118 7.87257 5.64645 7.65967Z"
                    fill="black"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
            </div>
            {dropDown.collapsible && <div>{dropDown.item.length}</div>}
          </div>
        ))}
    </div>
  );
};

export default SidebarDropdown;
