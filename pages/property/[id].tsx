import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyDetail from '@/components/property/PropertyDetail';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/properties/${id}`).then(res => setProperty(res.data));
    }
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}