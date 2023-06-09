import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import App from './App.js'
import React, { useEffect } from 'react'
import  ReactDOM  from 'react-dom'


export const data =[
  {
    "name": "Nguyen",
    "surnamme": "Louisa ",
    "email": "louisanguyen@ozean.com",
    "phone": "+1 (973) 516-3228",
    "address": "247 Dahill Road, Marysville, Massachusetts, 3737"
  },
  {
    "name": "Castro",
    "surnamme": "Katy ",
    "email": "katycastro@ozean.com",
    "phone": "+1 (886) 521-2969",
    "address": "226 Dinsmore Place, Nutrioso, Federated States Of Micronesia, 1697"
  },
  {
    "name": "Holman",
    "surnamme": "Wiggins ",
    "email": "wigginsholman@ozean.com",
    "phone": "+1 (872) 478-3898",
    "address": "155 Fane Court, Limestone, Iowa, 9636"
  },
  {
    "name": "Dominguez",
    "surnamme": "Skinner ",
    "email": "skinnerdominguez@ozean.com",
    "phone": "+1 (821) 559-2809",
    "address": "942 John Street, Bodega, Marshall Islands, 9622"
  },
  {
    "name": "Mckinney",
    "surnamme": "Donovan ",
    "email": "donovanmckinney@ozean.com",
    "phone": "+1 (925) 586-2706",
    "address": "642 Turner Place, Kula, Florida, 7659"
  },
  {
    "name": "Logan",
    "surnamme": "Sheila ",
    "email": "sheilalogan@ozean.com",
    "phone": "+1 (907) 498-2062",
    "address": "607 Bennet Court, Mayfair, Vermont, 3300"
  },
  {
    "name": "Wright",
    "surnamme": "Bird ",
    "email": "birdwright@ozean.com",
    "phone": "+1 (911) 558-3737",
    "address": "298 Juliana Place, Rivers, Kansas, 1101"
  },
  {
    "name": "Lambert",
    "surnamme": "Saundra ",
    "email": "saundralambert@ozean.com",
    "phone": "+1 (845) 575-2676",
    "address": "892 Ovington Avenue, Enlow, Ohio, 8578"
  },
  {
    "name": "Gibson",
    "surnamme": "Dora ",
    "email": "doragibson@ozean.com",
    "phone": "+1 (982) 430-2879",
    "address": "341 Martense Street, Islandia, Arkansas, 4392"
  }
]


const inter = Inter({ subsets: ['latin'] })

export default function Home() { 
  useEffect(() => {
    console.log(data)
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">e-mail</th>
      <th scope='col'>number</th>
      <th scope='col'>address</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) =>{
      return (<tr key={Math.random}>
        <th scope="row"></th>
        <td>{data["name"]}</td>
        <td>{data.age}</td>
        <td>{data.email}</td>
        <td>{data.number}</td>
        <td>{data.address}</td>
        </tr>
        )
    })}
  </tbody>
</table>
      </main>
    </>
  )
}
