import React from 'react'
import ColorGame from './Colorgame'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import BalloonPop from './Games/BaloonPop'
import CardDraw from './Games/CardDraw'
import CoinToss from './Games/CoinToss'
import DiceRollGame from './Games/Dice'
import HorseRacing from './Games/HorseRacing'
import NumberGuessing from './Games/NumberGuess'
import PickABox from './Games/PickABox'
import RandomAnimalRace from './Games/RandomAnimalRace'
import RockPaperScissors from './Games/RockPaperScissor'
import SpinTheSlot from './Games/SpintheSlot'
import TowerClimb from './Games/TowerClimb'
import WheelOfFortune from './Games/WheelofFortune'
import Games from './Games'
import BettingHistory from './BettingHistory'
import DepositWithdrawal from './DepositAndWithdraw'
import BonusPromotions from './Bonus'
import FAQ from './Faq'
import HelpSupport from './Help'
import ResponsibleGambling from './Responsible'
import TermsAndPrivacy from './TermsAndPrivacy'
import AboutUs from './AboutUs'
import AffiliateProgram from './Affiliate'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/colorgame' element={<ColorGame />} />
        <Route path='/game/baloon-pop' element={<BalloonPop />} />
        <Route path='/game/card-draw' element={<CardDraw />} />
        <Route path='/game/coin-toss' element={<CoinToss />} />
        <Route path='/game/dice' element={<DiceRollGame />} />
        <Route path='/game/horse-racing' element={<HorseRacing />} />
        <Route path='/game/number-guess' element={<NumberGuessing />} />
        <Route path='/game/pick-a-box' element={<PickABox />} />
        <Route path='/game/random-animal-race' element={<RandomAnimalRace />} />
        <Route path='/game/rock-paper-scissors' element={<RockPaperScissors />} />
        <Route path='/game/spin-the-slot' element={<SpinTheSlot />} />
        <Route path='/game/tower-climb' element={<TowerClimb />} />
        <Route path='/game/wheel-of-fortune' element={<WheelOfFortune />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/games" element={<Games />} />
        <Route path="/betting-history" element={<BettingHistory />} />
        <Route path="/deposit-withdrawal" element={<DepositWithdrawal />} />
        <Route path="/bonus" element={<BonusPromotions />} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/help-support" element={<HelpSupport/>} />
        <Route path="/responsible-gambling" element={<ResponsibleGambling/>} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/affliate" element={<AffiliateProgram/>} />
      </Routes>
    </BrowserRouter>
  )
}
