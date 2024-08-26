import React, { useEffect, useState } from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'

const ContactList = () => {

  const {contactList, inputWord} = useSelector((state)=>state)

  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    if(inputWord !== ""){
      let list = contactList.filter((item)=>item.name.includes(inputWord));
      setFilteredList(list);
    }else{
      setFilteredList(contactList);
    }
  }, [inputWord, contactList]);

  return (
    <div className='search-box'>
      <SearchBox />

      {filteredList.map((item, index)=> (
        <ContactItem item={item} key={index} />
        ))}
    </div>
  )
}

export default ContactList
