import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const GovHoliday = () => {
  const columns = [
    { field: "id", headerName: "NO", width: 100 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "day", headerName: "Day", width: 150 },
    {field: "holiday",
    headerName: "Holiday",
    width: 180},
    
  
]

const rows = [
    { id: 1, date: "21 Feb", day: "Tue", holiday:"Shaheed Day"  },
    { id: 2, date: "8 Mar", day: "Wed", holiday: "Shab-e Barat" },
    { id: 3, date: "17 Mar", day: "Fri", holiday:"Sheikh Mujibur Rahaman's Birthday"  },
    { id: 4, date: "26 Mar", day: "Sun", holiday:"Independent Day"  },
    { id: 5, date: "14 Apr", day: "Fri", holiday: "Bengali New Year" },
    { id: 6, date: "19 Apr", day: "Wed", holiday: "Laylat al-Qudr" },
    { id: 7, date: "21 Apr", day: "Fri", holiday: "Eid Ul-Fitr" },
    { id: 8, date: "22 Apr", day: "Fri", holiday: "Eid Ul-Fitr" },
    { id: 9, date: "23 Apr", day: "Sat", holiday:"Eid Ul-Fitr"  },
    { id: 10, date: "1 May", day: "Sun", holiday: "May Day" },
    { id: 11, date: "4 May", day: "Mon", holiday:  "Buddha Purnima"},
    { id: 12, date: "28 Jun", day: "Thu", holiday: "Eid Ul- Adha" },
    { id: 13, date: "29 Jun", day: "Wed", holiday: "Eid Ul- Adha" },
    { id: 14, date: "30 Jun", day: "Thu", holiday: "Eid Ul- Adha" },
    { id: 15, date: "29 Jul", day: "Fri", holiday: "Ashura" },
    { id: 16, date: "15 Aug", day: "Sat", holiday: "National Mourning Day" },
    { id: 17, date: "6 Sep", day: "Tue", holiday: "Shuba Janmashtami" },
    { id: 18, date: "24 Oct", day: "Wed", holiday: "Eid-e- Milad un Nabi" },
    { id: 19, date: "16 Dec", day: "Thu", holiday: "Vijaya Dashami" },
    { id: 20, date: "25 Dec", day: "Thu", holiday: "Victory Day" },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen" >
        <h2 className="text-center text-4xl font-bold mt-5 mb-5">Bangladesh Govt. Holiday</h2>
      <div style={{ width: "100%", maxWidth: "800px",backgroundColor:"palegreen"  }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default GovHoliday;
