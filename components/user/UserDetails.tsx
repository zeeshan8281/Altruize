import { useState, useEffect } from 'react'
import Image from 'next/image';
// RainbowKit
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
// DiceBear
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
// Firebase
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from '@/firebase.config'
// Hydration Error Hook
import useIsMounted from '@/hooks/useIsMounted';

export default function UserDetails() {

  const mounted = useIsMounted();

  // Random Avatar
  const [dataUri, setDataUri] = useState("");
  useEffect(() => {
    const date = new Date();
    const avatar = createAvatar(thumbs, {
      seed: `${date.getTime()}`,
    });
    const uri = avatar.toDataUriSync(); 
    setDataUri(uri);
  }, [])

  // Wallet Address and Balance States
  const { address } = useAccount()
  const { data } = useBalance({
    address: address,
  })

  // Fetch User Details
  useEffect(() => {
    const fetchData = async () => {
      const walletaddress = address!.toString();
      const docRef = doc(db, "users", walletaddress);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setName(data!.name);
      setEmail(data!.email);
    }
    fetchData();
  }, [])

  // Name and Email Sates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleNameEdit = () => {
    setNameEdit(true)
  }

  const handleNameSave = async () => {
    setNameEdit(false)
    const walletaddress = address!.toString();
    await setDoc(doc(db, "users", walletaddress), {
      name: name,
      email: email
    })
  }

  const handleEmailEdit = () => {
    setEmailEdit(true)
  }

  
  const handleEmailSave = async () => {
    setEmailEdit(false)
    const walletaddress = address!.toString();
    await setDoc(doc(db, "users", walletaddress), {
      name: name,
      email: email
    })
  }

  return (
    <div className="max-w-[1200px] mx-auto pt-[5%] min-h-screen">
      <div className="flex justify-between items-center border-b pb-[2%] px-[2%]">
        <h1 className='font-cutmark text-5xl text-white font-bold uppercase md:text-7xl'>
            User Details
        </h1>
        <ConnectButton/>
      </div>
      <section className='flex flex-col lg:flex-row items-center justify-between pt-[3%]'>
        <div className="lg:w-[60%] pl-[2%]">
          <p className='flex my-[2%]'>
            <label className="font-nunitoSans text-base font-semibold text-gray-300 md:text-xl mr-[2%]">Your Name:</label>
            { address && nameEdit 
                ? <input className="rounded-lg w-[40%] px-[2%]" placeholder={address ? name : "Enter your name."} value={name} onChange={handleNameChange}/>
                : <input className="rounded-lg w-[40%] px-[2%]" placeholder={address ? name : "Enter your name."} disabled/>
            }
            <button className="bg-secondary p-1 w-min rounded-lg ml-[2%]" onClick={handleNameEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
            { address && nameEdit
              ? 
                <button className="bg-green-400 p-1 w-min rounded-lg ml-[2%]" onClick={handleNameSave}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </button>
              : null
            }
          </p>
          <p className='flex my-[2%]'>
            <label className="font-nunitoSans text-base font-semibold text-gray-300 md:text-xl mr-[2.5%]">Your Email:</label>
            { address && emailEdit 
                ? <input className="rounded-lg w-[40%] px-[2%]" placeholder={address ? email :"Enter your email address."} value={email} onChange={handleEmailChange}/>
                : <input className="rounded-lg w-[40%] px-[2%]" placeholder={address ? email :"Enter your email address."} disabled/>
            }
            <button className="bg-secondary p-1 w-min rounded-lg ml-[2%]" onClick={handleEmailEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
            { address && emailEdit
              ? 
                <button className="bg-green-400 p-1 w-min rounded-lg ml-[2%]" onClick={handleEmailSave}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </button>
              : null
            }
          </p>
          { address && mounted 
            ? 
              <>
                <p className='flex items-center my-[2%] text-white'>
                  <p className='font-nunitoSans text-base font-semibold text-gray-300 md:text-xl mr-[2%]'>Wallet Address:</p>
                  <p className='font-nunitoSans text-base bg-white text-[#5C5B63] px-2 py-1 rounded-lg md:text-xl'>{address}</p>
                </p>
                <p className='flex items-center my-[2%] text-white'>
                  <p className='font-nunitoSans text-base font-semibold text-gray-300 md:text-xl mr-[2.5%]'>Wallet Balance:</p>
                  <p className='font-nunitoSans text-base bg-white text-[#5C5B63] px-2 py-1 rounded-lg md:text-xl'>{`${data?.formatted} ${data?.symbol}`}</p>
                </p>
              </>
            : null
          }
        </div>
        <div className='flex justify-center 2xl:w-[40%] lg:w-[30%] mr-[2%]'>
          <Image className="drop-shadow-[0_40px_70px_rgba(67,38,243,0.8)] rounded-full" src={dataUri} alt="Avatar" width={400} height={400}/>
        </div>
      </section>
    </div>
  )
}
