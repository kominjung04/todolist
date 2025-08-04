import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[time, setTime] = useState('');

  useEffect(() => {
    setTime(updateTime());

    // setInterval: 일정한 간격마다 함수 반복 실행
    // 1초마다 업데이트 
    const interval = setInterval(() => {
      setTime(updateTime());
    },1000);

    return () => clearInterval(interval);
  },[time]);

  return (
    <>
    <div className='App'>
      <div className='time'>
        {updateTime()}
      </div>
    <h1>ToDoList</h1>
    <div class="input">
    <input placeholder='할 일을 입력하시오.'></input>  <button>+</button>
    </div>
    </div>
    </>
  )
}

function updateTime(){
  const now = new Date();
  // 현재 시간 가져오기
  // padStart를 사용하여 두 자리 숫자로 표시
  const hours = String(now.getHours()).padStart(2, '0'); // 시간
  const minutes = String(now.getMinutes()).padStart(2, '0'); // 분
  const second = String(now.getSeconds()).padStart(2, '0'); // 초
  return `${hours}:${minutes}:${second}`;
    
}

export default App
