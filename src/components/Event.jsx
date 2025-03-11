import React, { useContext, useState } from 'react'
import Card from './Card';
import styles from '../styles/Event.module.css';
import { context } from '../App';
import { CgClose } from "react-icons/cg";
import { toast, ToastContainer } from 'react-toastify';
const Event = () => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState();
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [desc, setDesc] = useState('');
  const { arr, setArr } = useContext(context);
  const [post, setPost] = useState('');

  const handleCtaegory = (e) => {
    setCategory(e.target.value);
  }

  const handle = (e) => {
    e.preventDefault();
    if(title == '' || date == undefined || category == '' || location == '' || desc == ''){
      toast.error('Fill all the fields');
      return;
    }
    let obj = {
      'title': title,
      'date': date,
      'category': category,
      'location': location,
      'description': desc
    }
    setArr(prevArr => [...prevArr, obj]);
    setDisplay(false);
    setTitle('');
    setDate();
    setCategory('');
    setLocation('');
    setDesc('');
    toast.success("Event Posted Successfully");
  }
  return (
    <div>
      <div className={styles.first}>
        <button onClick={() => setDisplay(true)}>Add new event</button>
      </div>
      <div className={styles.mybtnDiv}>
        <button onClick={(e) => setPost(e.target.value)} value={'Religious'} className={styles.mybtn}>Religious</button>
        <button onClick={(e) => setPost(e.target.value)} value={'Social'} className={styles.mybtn}>Social</button>
        <button onClick={(e) => setPost(e.target.value)} value={'Charity'} className={styles.mybtn}>Charity</button>
        {post !== '' ? <CgClose className={styles.cross2} onClick={() => setPost('')} /> : ''}
      </div>
      {
        display == true ? <div className={styles.formDiv}>
          <form className={styles.frm} onSubmit={handle}>
            <CgClose className={styles.cross} onClick={() => setDisplay(false)} />
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter the title' />
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <div>

              Category :  <select name="" id="" onChange={(e) => handleCtaegory(e)}>
                <option value="Select">Select</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
            </div>
            <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} placeholder='Enter the location' />
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder='Write the description'
            />

            <button className={styles.btn} type='submit'>Add Event</button>
          </form> </div> : ''
      }

      <div className={styles.second}>
        {post === ''
          ? arr.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.description}
              date={item.date}
              loc={item.location}
              cat={item.category}
            />
          ))
          : arr
            .filter((item) => item.category === post)
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                desc={item.description}
                date={item.date}
                loc={item.location}
                cat={item.category}
              />
            ))}
      </div>
      <ToastContainer className={styles.toast} theme="colored" position="top-right" />
    </div>
  )
}

export default Event
