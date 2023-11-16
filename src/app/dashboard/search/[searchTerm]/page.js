'use client'
import { useState } from 'react';
import { HomesArtwork } from "@/components/homes-artwork";
import { useParams } from 'next/navigation';

export default function Search() {
  const params = useParams();
  const { searchTerm } = params['searchTerm'];
  console.log(searchTerm);
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
      setLoading(true);
      const res = await fetch(`/api/listing/get?${searchTerm}`);
      const data = await res.json();
      setListings(...listings,...data);
      setLoading(false);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchListings();
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7  border-b-2 md:border-r-2 md:min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <input
              type='text'
              id='searchTerm'
              placeholder='Search...'
              className='border rounded-lg p-3 w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search
          </button>
        </form>
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
          Listing results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && listings.length === 0 && (
            <p className='text-xl text-slate-700'>No listing found!</p>
          )}
          {loading && (
            <p className='text-xl text-slate-700 text-center w-full'>
              Loading...
            </p>
          )}

          {!loading &&
            listings &&
            listings.map((listing) => (
              <HomesArtwork key={listing._id} listing={listing} />
            ))}
        </div>
      </div>
    </div>
  );
}
