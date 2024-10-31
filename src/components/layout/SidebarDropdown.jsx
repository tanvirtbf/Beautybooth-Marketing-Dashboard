import { useState } from "react";



const SidebarDropdown = () => {

  const [selected,setSelected] = useState([])

  const handleSelect = (id)=>{
    setSelected((prevState)=> (
      [
        ...prevState,
        {_id:id}
      ]
    ))
  }

  const validateSelect = ()=>{

  }

  const dropDownItem = [
    {
      id: 1,
      icon: '/CampaignTrack.svg',
      dropDownName: "Ecom",
      collapsible: true,
      item: [
        { id: 1, name: "Insight", link: "/insight" },
        { id: 2, name: "Product List", link: "/product-list" },
      ],
    },
    {
      id: 2,
      icon: '/CampaignTrack.svg',
      dropDownName: "Marketplace",
      collapsible: true,
      item: [
        { id: 1, name: "Insight", link: "/insight" },
        { id: 2, name: "Product List", link: "/product-list" },
      ],
    },
    {
      id: 3,
      icon: '/CampaignTrack.svg',
      dropDownName: "Campaign Track",
      collapsible: false,
    },
    {
      id: 4,
      icon: '/CampaignTrack.svg',
      dropDownName: "Customer",
      collapsible: true,
      item: [{ id: 1, name: "Insight", link: "/insight" }],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {dropDownItem &&
        dropDownItem.map((dropDown) => (
          <div key={dropDown.id} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {dropDown.collapsible && (
                  <div className="w-5 h-5">
                    <img className="w-full h-full" src={dropDown.icon} alt={dropDown.icon} />
                  </div>
                )}
                <div>{dropDown.dropDownName}</div>
              </div>
              <div
                className="cursor-pointer"
                onClick={()=> handleSelect(dropDown.id)}
              >
                <svg
                  className={``}
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
            {dropDown.collapsible &&
              dropDown.item.map(({ id, name, link }) => (
                <div key={id} className="pl-6">
                  <a href={link}>{name}</a>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default SidebarDropdown;




// const SidebarDropdown = () => {

//   const url = '../../../public/CampaignTrack.svg'


//   const dropDownItem = [
//     {
//       id: 1,
//       icon: `../../../public/EcomIcon.svg?${url}`,
//       dropDownName: "Ecom",
//       collapsible: true,
//       item: [
//         { id: 1, name: "Insight", link: "/insight" },
//         { id: 2, name: "Product List", link: "/product-list" },
//       ],
//     },
//     {
//       id: 2,
//       icon: `../../../public/Marketplace.svg?${url}`,
//       dropDownName: "Marketplace",
//       collapsible: true,
//       item: [
//         { id: 1, name: "Insight", link: "/insight" },
//         { id: 2, name: "Product List", link: "/product-list" },
//       ],
//     },
//     {
//       id: 3,
//       icon: `../../../public/CampaignTrack.svg?${url}`,
//       dropDownName: "Campaign Track",
//       collapsible: false,
//     },
//     {
//       id: 4,
//       icon: `../../../public/Customer.svg?${url}`,
//       dropDownName: "Customer",
//       collapsible: true,
//       item: [{ id: 1, name: "Insight", link: "/insight" }],
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-4">
//       {dropDownItem &&
//         dropDownItem.map((dropDown) => (
//           <div key={dropDown.id} className="flex flex-col gap-1">
//             <div className="flex items-center justify-between">
//               <div className="flex gap-1">
//                 {dropDown.collapsible && (
//                   <div className="w-5 h-5">
//                     <img className="w-full h-full" src={dropDown.icon} alt={dropDown.icon} />
//                   </div>
//                 )}
//                 <div>{dropDown.dropDownName}</div>
//               </div>
//               <div
//                 className="cursor-pointer"
//               >
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M5.64645 7.65967C5.84171 7.44678 6.15829 7.44678 6.35355 7.65967L9.64645 11.25C9.84171 11.4629 10.1583 11.4629 10.3536 11.25L13.6464 7.65968C13.8417 7.44678 14.1583 7.44678 14.3536 7.65968C14.5488 7.87257 14.5488 8.21775 14.3536 8.43065L11.0607 12.021C10.4749 12.6597 9.52513 12.6597 8.93934 12.021L5.64645 8.43065C5.45118 8.21775 5.45118 7.87257 5.64645 7.65967Z"
//                     fill="black"
//                     fillOpacity="0.4"
//                   />
//                 </svg>
//               </div>
//             </div>
//             {dropDown.collapsible &&
//               dropDown.item.map(({ id, name, link }) => (
//                 <div key={id} className="pl-6">
//                   <a href={link}>{name}</a>
//                 </div>
//               ))}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default SidebarDropdown;

