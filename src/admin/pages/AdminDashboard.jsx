import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaBook, FaUser } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { ResponsiveContainer, BarChart, Legend, XAxis, YAxis, CartesianGrid, Bar, Pie, PieChart, Tooltip} from "recharts";
function AdminDashboard() {
  // #region Sample data
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];


  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          {/*grid card*/}
          <div className="grid grid-cols-3">
            {/* card 1*/}
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-orange-100 px-4 py-8 flex justify-center items-center text-5xl rounded">
                <FaBook />
                <div className="text-center ms-10 md:ms-5">
                  <h3 className="text-lg">Books</h3>
                  <h3 className="text-2xl">100+</h3>
                </div>
              </div>
            </div>

            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-red-100 px-4 py-8 flex justify-center items-center text-5xl rounded">
                <FaUser />
                <div className="text-center ms-10 md:ms-5">
                  <h3 className="text-lg">Users</h3>
                  <h3 className="text-2xl">100+</h3>
                </div>
              </div>
            </div>


            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-yellow-100 px-4 py-8 flex justify-center items-center text-5xl rounded">
                <FaPeopleGroup />
                <div className="text-center ms-10 md:ms-5">
                  <h3 className="text-lg">Employees</h3>
                  <h3 className="text-2xl">100+</h3>
                </div>
              </div>
            </div>

          </div>
          {/*grid chart title*/}
          <div className="md:grid grid-cols-2 p-5 mt-10">
            <div className="font-bold">
              Book Purchase Ratio
            </div>
            <div className="font-bold">
              Growth Ratio (yearly)
            </div>
          </div>
          {/*grid chart */}
          <div className="md:grid grid-cols-2 px-5 ">
            <div >
              {/*Book Purchase Ratio--bar chart */}
              <ResponsiveContainer width={'100%'} height={'300'}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />

                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
                <ResponsiveContainer width={'100%'} height={'300'}>
                <PieChart>
                  <Pie
                    data={data01}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#8884d8"
                  />
                  <Pie
                    data={data02}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#82ca9d"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div >
              {/*Growth Ratio (yearly)--pie chart*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminDashboard
