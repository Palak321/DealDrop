"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/app/actions";
import PriceChart from "./PriceChart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Trash2,
  TrendingDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const router = useRouter();
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Remove this product from tracking?")) return;

    setDeleting(true);
    await deleteProduct(product.id);
    router.refresh();
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        {product.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-48 object-contain bg-gray-50 rounded-lg mb-3"
          />
        )}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 text-left">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-600">
              {product.currency} {product.current_price}
            </span>
            <Badge variant="secondary" className="gap-1">
              <TrendingDown className="w-3 h-3" />
              Tracking
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowChart(!showChart)}
          className="gap-1"
        >
          {showChart ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide Chart
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Chart
            </>
          )}
        </Button>
      </CardContent>

      <CardFooter className="flex gap-2 pt-0">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <Link href={product.url} target="_blank">
            <ExternalLink className="w-4 h-4" />
            View Product
          </Link>
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          disabled={deleting}
        >
          <Trash2 className="w-4 h-4" />
          Remove
        </Button>
      </CardFooter>

      {showChart && (
        <CardContent className="pt-0">
          <PriceChart productId={product.id} />
        </CardContent>
      )}
    </Card>
  );
}
