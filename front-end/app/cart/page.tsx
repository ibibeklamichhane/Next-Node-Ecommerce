/*
const filesData = [
    {
      fileName: "myDocument.pdf",
      price: "$ 650",
      quantity: 1,
      subtotal: "$ 650",
    },
    {
      fileName: "image.png",
      price: "$ 700",
      quantity: 1,
      subtotal: "10 May, 2024",
    },
    {
      fileName: "presentation.png",
      price: "2 MB",
      quantity: 1,
      subtotal: "08 May, 2024",
    },
  ];
  
  const FileIcon = ({ fileName }: { fileName: string }) => {
    const getFileExtension = (name: string) => {
      const parts = name.split(".");
      return parts[parts.length - 1].toLowerCase();
    };
  
    const getIconComponent = (extension: string) => {
      switch (extension) {
   
      }
    };
  
    const fileExtension = getFileExtension(fileName);
    return <>{getIconComponent(fileExtension)}</>;
  };
  
  export default function Attachment() {
    return (
      <>
        <div className="bg-white text-black rounded-lg shadow-md h-full p-5  ">
          <h1 className="text-sm font-semibold leading-normal text-green">
            Attachments:
          </h1>
          <div>
            <div className=" rounded mt-4 text-black">
              <table className="w-full">
                <thead>
                <tr className="bg-white text-black border-2 border-gray-50 rounded-sm">
                  <th className="px-4 py-4 pl-7 font-normal w-1/6 text-start ">
                    Product
                  </th>
                  <th className="pl-48 py-4 font-normal w-1/6 text-start ">
                    Price
                  </th>
                  <th className="pl-24 py-4 font-normal w-1/6 text-start ">
                    Quantity
                  </th>
                  <th className="pl-24 py-4 font-normal w-1/6 text-start ">
                    Subtotal
                  </th>
                </tr>
                </thead>
                <tbody>
                  {filesData.map((file, idx) => (
                    <tr key={idx} className="">
                      <td className="px-4 py-4 pl-6">
                        <div className="bg-gray-100 p-3 pl-4 rounded-md shadow flex flex-row max-w-md items-center py-4">
                          <div className="flex flex-row gap-3 [&>svg]:w-7 items-center">
                            <FileIcon fileName={file.fileName} />
                            <p className="text-gray-800">{file.fileName}</p>
                          </div>
                          <div className="flex flex-row ml-auto gap-4 *:text-[22px] *:cursor-pointer">
  
                          </div>
                        </div>
                      </td>
                      <td className="pl-48 py-2">{file.price}</td>
                      <td className="pl-24 py-2">{file.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
  
        </div>
      </>
    );
  }
  */

  'use client'

  import React, { useState } from 'react';

  interface FileData {
    fileName: string;
    price: number;
    quantity: number;
    subtotal: number;
  }
  
  const filesData: FileData[] = [
    {
      fileName: "myDocument.pdf",
      price: 650,
      quantity: 1,
      subtotal: 650,
    },
    {
      fileName: "image.png",
      price: 700,
      quantity: 1,
      subtotal: 700,
    },
    {
      fileName: "presentation.png",
      price: 500,
      quantity: 1,
      subtotal: 500,
    },
  ];
  
  interface QuantityDropdownProps {
    initialQuantity: number;
    price: number;
    onQuantityChange: (newQuantity: number, newSubtotal: number) => void;
  }
  
  const QuantityDropdown: React.FC<QuantityDropdownProps> = ({ initialQuantity, price, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
  
    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newQuantity = parseInt(e.target.value);
      setQuantity(newQuantity);
      const newSubtotal = newQuantity * price;
      onQuantityChange(newQuantity, newSubtotal);
    };
  
    return (
      <select
        value={quantity}
        onChange={handleQuantityChange}
        className="border border-gray-300 rounded px-2 py-1"
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    );
  };
  
  const FileIcon: React.FC<{ fileName: string }> = ({ fileName }) => {
    const getFileExtension = (name: string) => {
      const parts = name.split(".");
      return parts[parts.length - 1].toLowerCase();
    };
  
    const getIconComponent = (extension: string) => {
      switch (extension) {
        // Add cases for different file extensions here
        default:
          return <span>🗎</span>;
      }
    };
  
    const fileExtension = getFileExtension(fileName);
    return <>{getIconComponent(fileExtension)}</>;
  };
  
  const Attachment: React.FC = () => {
    const [grandTotal, setGrandTotal] = useState(filesData.reduce((total, file) => total + file.subtotal, 0));
  
    const handleQuantityChange = (index: number, newQuantity: number, newSubtotal: number) => {
      const updatedData = [...filesData];
      updatedData[index].quantity = newQuantity;
      updatedData[index].subtotal = newSubtotal;
  
      const newGrandTotal = updatedData.reduce((total, file) => total + file.subtotal, 0);
      setGrandTotal(newGrandTotal);
    };
  
    return (
      <>
        <div className="bg-white text-black rounded-lg shadow-md h-full p-5">
          <h1 className="text-sm font-semibold leading-normal text-green">
            Attachments:
          </h1>
          <div>
            <div className=" rounded mt-4 text-black">
              <table className="w-full">
                <thead>
                  <tr className="bg-white text-black border-2 border-gray-50 rounded-sm">
                    <th className="px-4 py-4 pl-7 font-normal w-1/6 text-start">
                      Product
                    </th>
                    <th className="pl-48 py-4 font-normal w-1/6 text-start">
                      Price
                    </th>
                    <th className="pl-24 py-4 font-normal w-1/6 text-start">
                      Quantity
                    </th>
                    <th className="pl-24 py-4 font-normal w-1/6 text-start">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filesData.map((file, idx) => (
                    <tr key={idx} className="">
                      <td className="px-4 py-4 pl-6">
                        <div className="bg-gray-100 p-3 pl-4 rounded-md shadow flex flex-row max-w-md items-center py-4">
                          <div className="flex flex-row gap-3 [&>svg]:w-7 items-center">
                            <FileIcon fileName={file.fileName} />
                            <p className="text-gray-800">{file.fileName}</p>
                          </div>
                          <div className="flex flex-row ml-auto gap-4 *:text-[22px] *:cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="pl-48 py-2">${file.price}</td>
                      <td className="pl-24 py-2">
                        <QuantityDropdown
                          initialQuantity={file.quantity}
                          price={file.price}
                          onQuantityChange={(newQuantity, newSubtotal) =>
                            handleQuantityChange(idx, newQuantity, newSubtotal)
                          }
                        />
                      </td>
                      <td className="pl-24 py-2">${file.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div>
            <p className="font-bold">Grand Total: ${grandTotal}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Attachment;