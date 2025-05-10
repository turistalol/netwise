'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!closed) {
        setIsVisible(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [closed]);

  const handleClose = () => {
    setIsVisible(false);
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-40 max-w-xs glass-effect/50 p-4 rounded-xl border border-secondary/80"
        >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-secondary/20 text-secondary rounded-full">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-medium mb-2">Precisa de ajuda?</h4>
              <p className="text-sm text-gray-300 mb-3">
                Converse com um especialista em proteção de dados e descubra a melhor solução para sua empresa.
              </p>
              <Link href="https://wa.me/5508000953252?text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20da%20p%C3%A1gina%20Netwise%20Empresas%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20corporativas%20dispon%C3%ADveis.">
                <Button 
                  className="w-full text-sm bg-secondary text-black hover:bg-secondary/80"
                  onClick={handleClose}
                >
                  Falar com especialista
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};