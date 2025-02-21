import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";


const mediaData = [
  { id: 1, type: "photo", src: "https://static.toiimg.com/thumb/msid-112001602,width-400,resizemode-4/112001602.jpg", title: "Photo 1" },
  { id: 2, type: "photo", src: "https://static.toiimg.com/thumb/msid-112001602,width-400,resizemode-4/112001602.jpg", title: "Photo 2" },
  { id: 3, type: "photo", src: "https://static.toiimg.com/thumb/msid-112001602,width-400,resizemode-4/112001602.jpg", title: "Photo 3" },
  { id: 4, type: "photo", src: "/path-to-photo4.jpg", title: "Photo 4" },
];

export function Stack() {
  return (
    <div className="p-1">
      <div className="flex flex-col gap-3">
        {mediaData.map((media) => (
          <Card key={media.id} className="flex items-center gap-2 p-2">
            <img
              src={media.src}
              alt='404!!'
              className="object-cover w-10 h-10 rounded-md"
            />
            <CardContent>
              <h3 className="text-lg font-medium">{media.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
        
  );
}
