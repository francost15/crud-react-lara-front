/* eslint-disable react/prop-types */
export const DivTable = ({children, col, off, classLoad, classTable}) => {
    return (
      <div className="flex mt-3">
        <div className={`w-full md:w-${col}/12 md:ml-${off}/12`}>
          <div className={`card border border-white text-center ${classLoad}`}>
            <div className="flex justify-center card-body p-4">
              <img src="public/progress-circle.gif" className="img-fluid" alt="icono"/>
            </div>
          </div>
          <div className={`table-responsive${classTable}`}>
            {children}
          </div>
        </div>
      </div>
    )
  }
  
  export default DivTable