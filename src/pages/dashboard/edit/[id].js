import FormProduct from "@components/FormProduct";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProduct } from "@services/api/products";

const Edit = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    getProduct(id).then((res) => setProduct(res));
  }, [router.isReady]);

  return <FormProduct product={product} />;
};

export default Edit;
