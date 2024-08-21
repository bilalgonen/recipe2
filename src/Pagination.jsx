import React from 'react'

// import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='flex flex-row gap-1 mx-auto  justify-center my-4'>
      {/* {totalPosts} posts - {postsPerPage} posts per page - {pages.length} pages
      - current page: {currentPage} */}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`text-blue-600 font-medium border rounded-md size-8 p-1 cursor-pointer hover:bg-opacity-70 disabled:cursor-not-allowed ${
              page == currentPage ? 'bg-yellow-500' : 'bg-yellow-200'
            }`}
            disabled={page == currentPage}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
