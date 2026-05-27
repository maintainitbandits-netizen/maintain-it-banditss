import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  to: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function ServiceCard({ to, image, imageAlt, title, description }: ServiceCardProps) {
  return (
    <Link
      to={to}
      className="group block bg-warm-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-lime/10 hover:shadow-xl hover:shadow-lime/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-black mb-2 group-hover:text-lime-dark transition-colors">
          {title}
        </h3>
        <p className="text-charcoal/50 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-lime font-semibold text-sm group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
