import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
}

export default function TestimonialCard({ name, location, text, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-warm-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-lime/10">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-lime text-lime" />
        ))}
      </div>
      <p className="text-charcoal/60 text-sm leading-relaxed mb-6 italic">&ldquo;{text}&rdquo;</p>
      <div>
        <div className="font-heading font-bold text-black">{name}</div>
        <div className="text-charcoal/30 text-xs">{location}</div>
      </div>
    </div>
  );
}
