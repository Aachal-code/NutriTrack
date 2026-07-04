import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronDown, Phone, ShieldAlert } from 'lucide-react';
import { EMERGENCY_SIGNS } from '../../data/vaccineEnrichment';

export default function EmergencyCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`emergency-card ${expanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <button
        className="emergency-card-header"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="emergency-content"
      >
        <div className="emergency-card-header-left">
          <ShieldAlert size={22} />
          <div>
            <h3>Emergency Warning Signs</h3>
            <p>Seek medical attention immediately if you experience any of these symptoms</p>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`emergency-card-chevron ${expanded ? 'rotated' : ''}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id="emergency-content"
            className="emergency-card-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="emergency-card-disclaimer">
              <AlertTriangle size={16} />
              <span>If you experience any of these symptoms, contact your healthcare provider or go to the nearest emergency room immediately.</span>
            </div>

            <div className="emergency-card-list">
              {EMERGENCY_SIGNS.map((sign, index) => (
                <motion.div
                  key={index}
                  className={`emergency-card-item ${sign.severity}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <span className="emergency-card-item-icon">{sign.icon}</span>
                  <span className="emergency-card-item-text">{sign.text}</span>
                  <span className={`emergency-card-item-severity ${sign.severity}`}>
                    {sign.severity === 'critical' ? 'URGENT' : sign.severity === 'serious' ? 'Serious' : 'Monitor'}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="emergency-card-footer">
              <Phone size={16} />
              <span>Emergency: Call your local emergency number or go to the nearest hospital</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
