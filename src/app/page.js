export default function Home() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  
  return (
    <>
      {/* <div>Page top</div> */}
      <div className="flex gap-4 overflow-x-auto">
        {array.map((item, i) => {
          return (
            <div className="card" key={item}>
              <p>{i}</p>
            </div>
          )
        })}
      </div>

      <div style={{height: '1000px'}}></div>
      {/* <div>Page bottom</div> */}
    </>
  );
}
